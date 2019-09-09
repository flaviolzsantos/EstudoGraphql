const { usuarios, proximoId } = require("../../data/db")

function indicieUsuario(filtro){
    if(!filtro) return -1

    const {id, email} = filtro

    if(id)
        return usuarios.findIndex(x => x.id === id)

    if(email)
        return usuarios.findIndex(x => x.email === email)

    return -1
}

module.exports = {
    //{nome, email, idade}
    novoUsuario(_, { dados } ){
        const emailExistente = usuarios.some(x => x.email === dados.email)

        if(emailExistente)
            throw new Error("Email cadastrado")

        const novo = {
            id: proximoId(),
            ...dados,
            perfil_id: 1,
            status: 'ATIVO'
        }

        usuarios.push(novo)
        return novo
    },
    excluirUsuario(_, { filtro }){
        const indice = indicieUsuario(filtro)

        if(indice < 0) return null

        const excluidos = usuarios.splice(indice,1)

        return excluidos ? excluidos[0] : null
    },
    alterarUsuario(_, args){
        const indice = usuarios.findIndex(x => x.id === args.id)
        if(indice < 0) return null

        const usuario = {
            ...usuarios[indice],
            ...args
        }

        usuarios.splice(indice, 1, usuario)
        return usuario
    }
}