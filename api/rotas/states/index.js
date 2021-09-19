const roteador = require('express').Router();
const TabelaState = require('./TabelaState');
const States = require('./States');
const NaoEncontrado = require('../../erros/NaoEncontrado');
const SerializadorStates = require('../../Serializador').SerializadorStates;


roteador.get('/', async (req, res) => {
    const resultados = await TabelaState.listar()
    res.status(200);
    const serializador = new SerializadorStates(
        res.getHeader('Content-Type')
    );
    res.send(
        serializador.serializar(resultados)
    );
})

roteador.post('/', async (req, res, proximo) => {
    try{
        const dadosRecebidos = req.body;
        const states = new States(dadosRecebidos);
        await states.criar();
        res.status(201);
        const serializador = new SerializadorStates(
            res.getHeader('Content-Type')
        );
        res.send(
            serializador.serializar(states)
        )
    }catch(erro){
       proximo(erro); 
    }
})

roteador.get('/:idStates', async (req, res, proximo) => {
    try{
        const id = req.params.idStates;
        const states = new States({ id: id });
        await states.carregar();
        res.status(200);
        const serializador = new SerializadorStates(
            res.getHeader('Content-Type')
        );
        res.send(
            serializador.serializar(states)
        )
    }catch(erro){
        proximo(erro);
    }
})

roteador.put('/:idStates', async (req, res, proximo) => {
    try{
        const id = req.params.idStates;
        const dadosRecebidos = req.body;
        const dados = Object.assign({}, dadosRecebidos, {id: id});
        const states = new States(dados);
        await states.atualizar();
        res.status(204);
        res.end();
    }catch(erro){
        proximo(erro);
    }
})

roteador.delete('/:idStates', async (req, res, proximo) => {
    try{
        const id = req.params.idStates;
        const states = new States({id: id});
        await states.carregar();
        await states.remover();
        res.status(204);
        res.end();
    }catch(erro){
        proximo(erro); 
    }
})

module.exports = roteador;