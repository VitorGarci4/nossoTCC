const express = require('express');
const path = require('path');
const app = express();

// Define o diretório onde estão os arquivos estáticos (HTML, CSS, JS, etc.)
app.use(express.static(path.join('nossoTCC', 'public')));

// Rota para a página principal
app.get('/', (req, res) => {
  res.sendFile(path.join('inicio.hqtml', 'public', 'index.html'));
});

// Inicia o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
  