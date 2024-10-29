import express from 'express';
import axios from 'axios';

const app = express();
const port = 3560;

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);

})

app.get('/', (req, res) => {
    res.send('Server is working');
});

app.get('/AvailableCountries', async (req, res) => {
    try {
        const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
        res.json(response.data)
    } catch (error) {


        res.status(500).json({ error })
    }
})

app.get('/:countryName/:countryCode', async (req, res) => {
    const countryCode = req.params.countryCode;
    const countryName = req.params.countryName;

    // Validação dos parâmetros
    if (!countryName || !countryCode) {
        return res.status(400).json({ error: "Country name and code are required" });
    }

    try {
        const [borderResponse, populationResponse, flagResponse] = await Promise.all([
            axios.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`),
            axios.get(`https://countriesnow.space/api/v0.1/countries/population`),
            axios.get(`https://countriesnow.space/api/v0.1/countries/flag/images`),
        ]);

        // Verificação de dados retornados
        if (!borderResponse.data || !populationResponse.data || !flagResponse.data) {
            return res.status(404).json({ error: "Country data not found" });
        }

        const borderCountries = borderResponse.data.borders || [];
        const populationData = populationResponse.data.data.find((country) => country.country.toLowerCase() === countryName.toLowerCase());
        const flagData = flagResponse.data.data.find((country) => country.iso2 === countryCode);

        const countryInfo = {
            borders: borderCountries,
            populationData: populationData ? populationData.populationCounts : [],
            flagURL: flagData ? flagData.flag : "Flag URL not found"
        };

        res.json(countryInfo);
    } catch (error) {
        console.error(error); // Log do erro para depuração
        res.status(500).json({ error: "Internal server error" });
    }
});