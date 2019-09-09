const { ApolloServer} = require('apollo-server')
const { importSchema } = require('graphql-import')
const resolvers = require("./resolvers")

const server = new ApolloServer({
    typeDefs : importSchema("./schema/index.graphql"),
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})


//Fragment
// {
//     usuario(id : 2){
//       ...UsuarioCompleto
//     }
// usuarios{
//     ...UsuarioCompleto
//   }
//   }
//   fragment UsuarioCompleto on Usuario{
//     id nome email idade salario vip
//     perfil{ nome id  }
//   }