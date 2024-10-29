import express from 'express';
import axios from 'axios';

const app = express();
const port = process.env.PORT;

app.use(express.json())

app.listen(port, () => {
    console.log(`server is running on port ${port}`);

})

app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
        res.json(response.data)
    } catch (error) {


        res.status(500).json({ error })
    }
})