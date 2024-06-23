const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(cadastro, 'public')));

// Configurando o banco de dados SQLite
const db = new sqlite3.Database(':memory:'); // ou use um arquivo de banco de dados, por exemplo, 'data.db'

// Criando a tabela de usuários
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    email TEXT,
    senha TEXT
  )`);
});

// Rota para salvar os dados do formulário
app.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;
  const stmt = db.prepare('INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)');
  stmt.run(nome, email, senha, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID });
  });
  stmt.finalize();
});

// Rota para a página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
