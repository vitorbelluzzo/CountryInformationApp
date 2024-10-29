import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 3560;

app.use(express.json())

app.listen(3000, () => {
    console.log('server is running on port 3000');

})

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
        res.json(response.data)
    } catch (error) {

        if (error.response) {
            console.log();

        }
        res.status(500).json({ error })
    }
})