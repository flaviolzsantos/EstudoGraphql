const { ApolloServer, gql} = require('apollo-server')

const perfis = [{
    id : 1,
    nome : 'Comum'
},{
    id : 2,
    nome : 'Administrador'
}]

const usuarios = [{
    id: 1,
    nome: 'joão',
    email: 'joao@joao.com',
    idade: 12,
    perfil_id : 1
},{
    id: 2,
    nome: 'maria',
    email: 'maria@maria.com',
    idade: 25,
    perfil_id : 2
}]

const typeDefs = gql`
    #ponto de entrada da API
    scalar Date
    type Perfil {
        id : Int!
        nome : String!
    }
    type Usuario {
        id: Int!
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
        perfil : Perfil
    }
    type Produto {
        nome: String!
        preco: Float!
        desconto: Float 
        precoComDesconto: Float
    }
    type Query {
        ola : String
        horaAtual : Date
        usuarioLogado: Usuario
        produtoEmDestaque: Produto
        numerosMegaSena: [Int!]!
        usuarios: [Usuario]
        usuario(id : Int) : Usuario
        perfis : [Perfil]
        perfil(id : Int) : Perfil
    }
`

const resolvers = {
    Usuario : {
        salario(usuario){
            return usuario.salario_real
        },
        perfil(usuario){
            const perfilSelecionado = perfis.filter( x => x.id === usuario.perfil_id)
            return (perfilSelecionado) ? perfilSelecionado[0] : null
        }
    },
    Produto : {
        precoComDesconto(produto){
            if(produto.desconto != undefined)
                return produto.preco - produto.desconto
            else
                return produto.preco
        }
    },
    Query: {
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
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})