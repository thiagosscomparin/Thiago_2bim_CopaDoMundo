## Painel da Copa do Mundo 2026
O objetivo é simples: criar uma aplicação que mostra as seleções, os jogos da fase de grupos e calcula a classificação de cada grupo automaticamente, usando dados reais de um banco PostgreSQL.

## O que a aplicação faz

- Mostra as 48 seleções participantes, organizadas por grupo, com bandeira.

- Mostra as 72 partidas da fase de grupos, com placar, data e estádio.

- Permite filtrar as seleções de um grupo específico.

- Calcula a classificação de cada grupo (pontos, vitórias, empates, derrotas e saldo de gols) com base nos resultados das partidas. Esse cálculo é feito no front-end, em JavaScript.

## Tecnologias utilizadas

- **Back-end:** Node.js + Express.

- **Banco de dados:** PostgreSQL (via biblioteca `pg`).

- **Front-end:** HTML, CSS e JavaScript.

- **Outras libs:** `cors` (liberar requisições entre front e back) e `dotenv` (variáveis de ambiente).

## Estrutura do projeto

ProjetoDW/

├── database/

│   └── projetoDW.sql      → script de criação e população das tabelas

├── index.html              → página inicial (menu)

├── index.css

├── jogos.html               → seleções e partidas

├── jogos.css

├── classificacao.html       → classificação por grupo

├── class.css

├── server.js                → back-end (rotas da API)

├── package.json

└── .env                     → credenciais do banco (não vai pro Git)

## Como rodar o projeto na sua máquina

**1. Clone o repositório**

git clone <url-do-repositorio>

cd ProjetoDW

**2. Instale as dependências**

npm install

**3. Crie um banco de dados PostgreSQL** e rode o script que está em `database/projetoDW.sql`.

**4. Crie um arquivo `.env`** com as informações do seu banco:

DB_HOST=localhost

DB_PORT=5432

DB_NAME=nome_do_seu_banco

DB_USER=postgres

DB_PASSWORD=sua_senha

PORT=3001

**5. Inicie o servidor**

npm start

**6. Abra o front-end** abrindo o arquivo `index.html` no navegador.

## Rotas disponíveis

 GET `/selecoes`  Lista todas as seleções, ordenadas por grupo 

 GET  `/selecoes/:grupo`  Lista só as seleções de um grupo específico 

 GET  `/partidas`  Lista todas as partidas, com nome dos times 

## Sobre os dados

Os times e grupos são os reais da Copa do Mundo 2026. Os placares também são todos reais.

## Autor

Thiago da Silva Scomparin