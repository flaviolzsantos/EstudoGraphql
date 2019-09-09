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
    perfil_id : 1,
    status : 'Ativo'
},{
    id: 2,
    nome: 'maria',
    email: 'maria@maria.com',
    idade: 25,
    perfil_id : 2,
    status : 'Inativo'
}]

module.exports = { usuarios, perfis }