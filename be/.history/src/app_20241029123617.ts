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

app.get('/borderCountries', async (req, res) => {
    try {
        const { data } = await axios.get('https://date.nager.at/api/v3/CountryInfo/UA')
        data.borders = data.borders?.filter((border: { borders: string; }) => border.borders !== null);
        res.json(data)
    } catch (error) {
        res.status(500).json({ error })
    }
})