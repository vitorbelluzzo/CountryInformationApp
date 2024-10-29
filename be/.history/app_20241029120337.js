const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('server is running on port 3000');

})

app.get('/availablecountries', async (req, res) => {
    try {
        const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
        res.json(response.data)
    } catch (error) {
        console.error('Erro ao acessar a API Nager:', error);
        if (error.response) {
            // A requisição foi feita e o servidor respondeu com um status diferente de 2xx
            console.error('Dados da resposta:', error.response.data);
            console.error('Status da resposta:', error.response.status);
            console.error('Cabeçalhos da resposta:', error.response.headers);
            res.status(error.response.status).json({ error: error.response.data });
        } else if (error.request) {
            // A requisição foi feita, mas não houve resposta
            console.error('Não houve resposta da API:', error.request);
            res.status(500).json({ error: 'Não foi possível acessar a API' });
        } else {
            // Algum outro erro ocorreu durante a requisição
            console.error('Erro na requisição:', error.message);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
})