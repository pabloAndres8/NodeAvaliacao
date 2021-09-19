const Sequelize = require('sequelize');
const instancia = require('../../banco-de-dados');

const colunas = {
    nome: {
        type: Sequelize.STRING,
        allowNull : false
    },
    regiao: {
        type: Sequelize.ENUM('Norte', 'Nordeste', 'Sul', 'Suldeste', 'Centro-Oeste'),
        allowNull: false
    },
    populacao: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    capital: {
        type: Sequelize.STRING,
        allowNull : false
    }, 
    area: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
    
}

const opcoes = {
    freezeTableName : true,
    tableName : 'estados'

}

module.exports = instancia.define('estados', colunas, {
    timestamps: false,
    createdAt: false,
    updatedAt: false
} )