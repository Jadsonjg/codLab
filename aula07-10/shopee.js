//PROJETO: DESENVOLVER UMA LOJA QUE VERIFICARÁ O PRODUTO, BUSCARÁ, MOSTRARÁ, ADICIONARÁ AO CARRINHO, IMPEDIR PRODUTO DUPLICADO E CALCULAR O TOTAL DA COMPRA.


let produtos = ["Teclado", "Mouse", "Headfone", "Mouse Pad", "Sound Bar"]
let precos = [30, 15, 20, 5, 50]
let carrinho = []

//Verificar produto. Existe?
function verificarProdutos (produto) {
    if (produtos.includes(produto)){
        console.log(`${produto} está disponivel pra venda!`)
        return true
    } else {
        console.log ("Não está disponível pra venda.")
        return false
    }
}

//Buscar produto. Aonde?

function buscarProdutos(produto) {
    let resultado = produtos.indexOf(produto)
    return resultado
}
let posicao = buscarProdutos("Mouse")

// console.log(produtos[posicao])
// console.log(precos[posicao])

//Buscar catálogo de produtos, printando "1 Mouse - R$ 35";

function catalogoProdutos() {
    for (i=0;i<produtos.length;i++)
        console.log([i+1], produtos[i], "R$", precos[i])
}


//Adicionar ao carrinho. 

function adicionarCarrinho(produto) {
    if (!verificarProdutos(produto)) return ("Produto não existe.");
    if (carrinho.includes(produto)) return ("Produto já está adicionado no carrinho!\n")
          carrinho.push(produto)
        console.log("Item adicionado ao carrinho.\n")
}


adicionarCarrinho("Mouse")
adicionarCarrinho("Teclado")
console.log(adicionarCarrinho("Mouse"))
console.log(adicionarCarrinho("Gabinete"))











