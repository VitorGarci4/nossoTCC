// Importa o axios
const axios = require('axios');

// Função para fazer uma requisição GET
async function fetchData() {
    try {
        // Faz uma requisição GET para uma URL de exemplo
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        
        // Exibe os dados recebidos no console
        console.log(response.data);
    } catch (error) {
        // Trata os erros da requisição
        console.error('Erro ao fazer a requisição:', error);
    }
}

// Chama a função fetchData
fetchData();
