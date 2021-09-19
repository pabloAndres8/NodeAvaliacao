const TabelaState = require('./TabelaState');
const CampoInvalido = require('../../erros/CampoInvalido');
const DadosNaoFornecidos = require('../../erros/DadosNaoFornecidos');

class States{
    constructor({id, nome, regiao, populacao, capital, area}){
        this.id = id
        this.nome = nome
        this.regiao = regiao
        this.populacao = populacao
        this.capital = capital
        this.area = area
    }

    async criar(){
        this.validar()
        const resultado = await TabelaState.inserir({
            nome: this.nome,
            regiao: this.regiao,
            populacao: this.populacao,
            capital: this.capital,
            area: this.area
        })

        this.id = resultado.id
    }

    async carregar(){
        const encontrado = await TabelaState.pegarPorId(this.id);
        this.nome = encontrado.nome;
        this.regiao = encontrado.regiao;
        this.populacao = encontrado.populacao;
        this.capital = encontrado.capital;
        this.area = encontrado.area

    }

    async atualizar(){
        await TabelaState.pegarPorId(this.id);
        const campos = ['nome', 'regiao','populacao', 'capital', 'area'];
        const dadosParaAtualizar = {};

        campos.forEach((campo) => {
            const valor = this[campo];
            if((typeof valor === 'string' || typeof valor === 'number') && valor.length > 0){
                dadosParaAtualizar[campo] = valor;
            }
        })


        if(Object.keys(dadosParaAtualizar).length === 0){
            throw new DadosNaoFornecidos();
        }

        await TabelaState.atualizar(this.id, dadosParaAtualizar);
    }

    remover(){
        return TabelaState.remover(this.id)
    }

    validar(){
        const campos = ['nome', 'regiao', 'capital'];

        campos.forEach(campo => {
            const valor = this[campo];

            if(typeof valor !== 'string' || valor.length === 0){
                throw new CampoInvalido(campo);
            }
        })

        const campos2 = ['populacao', 'area'];

        campos2.forEach(campo => {
            const valor = this[campo];

            if(typeof valor !== 'number' || valor.length === 0){
                throw new CampoInvalido(campo);
            }
        })
    }
}

module.exports = States;