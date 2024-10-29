import express from 'express';
import axios from 'axios';

const app = express();
const port = 3560;

app.use(express.json())

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

    try {
        const [borderResponse, populationResponse, flagResponse] = await Promise.all([
            axios.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`),
            axios.get(`https://countriesnow.space/api/v0.1/countries/population`),
            axios.get(`https://countriesnow.space/api/v0.1/countries/flag/images`),
        ]);

        const borderCountries = borderResponse.data.borders?.filter(border => border.borders !==null);
        const populationData = populationResponse.data.data?.filter(country => country.country == countryName);
        const flagURL;
    } catch (error) {

    }
})