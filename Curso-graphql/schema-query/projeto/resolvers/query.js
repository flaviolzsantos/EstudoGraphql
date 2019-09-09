const {usuarios, perfis} = require("../data/db")

module.exports = {
    ola(){
        return 'Teste de retorno string'
    },
    horaAtual(){
        return new Date
    },
    usuarioLogado(){
        return {
            id : 1,
            nome : 'Flavio',
            email : 'flavio@teste.com',
            idade : 35,
            salario_real : 1000.00,
            vip : true

        }
    },
    produtoEmDestaque(){
        return {
            nome : 'Produto 1',
            preco : 123,
            desconto : 23
        }
    },
    numerosMegaSena() {
        const crescente = (a,b) => a - b
        return Array(6).fill(0).map(() => parseInt(Math.random() * 60)).sort(crescente)
    },
    usuarios(){
        return usuarios
    },
    usuario(_,{ id }){
        const selecionados =  usuarios.filter(u => u.id === id)
        return selecionados ? selecionados[0] : null
    },
    perfis(){
        return perfis
    },
    perfil(_ , { id }){
        const perfilSelecionado = perfis.filter( x => x.id == id )
        return perfilSelecionado ? perfilSelecionado[0] : null
    }
}