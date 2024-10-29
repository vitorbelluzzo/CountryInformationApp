const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('server is running on port 3000');

})

app.get('/AvailableCountries', async (req, res) => {
    try {
        const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
        res.json(response.data)
    } catch (error) {
        res.status(500).json({ error })
    }
})