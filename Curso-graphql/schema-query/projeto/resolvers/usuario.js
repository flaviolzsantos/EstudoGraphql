const { perfis } =  require("../data/db")

module.exports = {
    salario(usuario){
        return usuario.salario_real
    },
    perfil(usuario){
        const perfilSelecionado = perfis.filter( x => x.id === usuario.perfil_id)
        return (perfilSelecionado) ? perfilSelecionado[0] : null
    }
}