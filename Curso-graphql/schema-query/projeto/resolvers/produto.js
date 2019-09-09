module.exports = {
    precoComDesconto(produto){
        if(produto.desconto != undefined)
            return produto.preco - produto.desconto
        else
            return produto.preco
    }
}