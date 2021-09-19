<h1>API-States</h1>

Neste código foi feito uma API Restfull no NodeJS. Onde, foi criado uma API para trabalhar com o nosso um projeto de Estados.

### Preparando o ambiente

Neste código, vamos utilizar NodeJS, um programa para executar nosso código escrito em JavaScript no nosso computador! Para armazenar nossas informações, vamos utilizar MySQL como nosso banco de dados e o Postman para testar a nossa API.

* NodeJS: https://nodejs.org/en/download/
* Postman: https://www.postman.com/downloads/
* MySQL: https://www.mysql.com/downloads/

### Iniciar o npm para trabalhar com o NodeJS
* npm init -y

### Pacotes para utilizar no desenlvimento da API
* npm install express
* npm install  body-parser
* npm install sequelize
* npm instal mysql2

### Para executar a API no terminal
* node api/index.js

### Configurações no Banco de Dados

Para criar o banco de dados  que foi declarado nas configurações, basta acessar o MySQL
e verificar se está de acorodo com suas configurações e criar o banco.

* CREATE DATABASE 'NOME DA TABELA'

Para criar as tabelas por meio do código basta colocar este código no terminal:
* node api/banco-de-dados/criarTabelas.js

