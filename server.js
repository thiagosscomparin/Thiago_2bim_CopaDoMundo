const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

app.use(express.json());
app.use(cors());

app.get('/selecoes', async (req, res) => {
    try {
        const query = 'SELECT * FROM selecao ORDER BY grupo, nome_selecao';
        const result = await pool.query(query);
        res.json({ sucesso: true, selecoes: result.rows });
    } catch (error) {
        console.error('Erro ao listar seleções:', error);
        res.status(500).json({ sucesso: false, mensagem: 'Erro interno do servidor' });
    }
});

app.get('/partidas', async (req, res) => {
    try {
        const query = `
            SELECT 
                p.id_partida,
                casa.nome_selecao AS time_casa,
                fora.nome_selecao AS time_fora,
                p.gols_casa,
                p.gols_fora,
                TO_CHAR(p.data_partida, 'YYYY-MM-DD') AS data_partida,
                p.estadio
            FROM partida p
            JOIN selecao casa ON p.selecao_casa_id = casa.id_selecao
            JOIN selecao fora ON p.selecao_fora_id = fora.id_selecao
            ORDER BY p.data_partida
        `;
        const result = await pool.query(query);
        res.json({ sucesso: true, partidas: result.rows });
    } catch (error) {
        console.error('Erro ao listar partidas:', error);
        res.status(500).json({ sucesso: false, mensagem: 'Erro interno do servidor' });
    }
});
app.get('/selecoes/:grupo', async (req, res) => {
    try {
        const grupo = req.params.grupo.toUpperCase();
        const query = 'SELECT * FROM selecao WHERE grupo = $1 ORDER BY nome_selecao';
        const result = await pool.query(query, [grupo]);
        res.json({ sucesso: true, selecoes: result.rows });
    } catch (error) {
        console.error('Erro ao listar seleções do grupo:', error);
        res.status(500).json({ sucesso: false, mensagem: 'Erro interno do servidor' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});