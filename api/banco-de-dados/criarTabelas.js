const ModeloTabela = require('../rotas/states/ModeloTabelaState');

ModeloTabela
    .sync()
     .then(() => console.log('Tabela criada com sucesso'))   
     .catch(console.log)