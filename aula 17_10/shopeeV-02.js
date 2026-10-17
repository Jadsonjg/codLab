//|==========================================================================================================================================================|
//|PROJETO: DESENVOLVER UMA LOJA QUE VERIFICARÁ O PRODUTO, BUSCARÁ, MOSTRARÁ, ADICIONARÁ AO CARRINHO, IMPEDIR PRODUTO DUPLICADO E CALCULAR O TOTAL DA COMPRA.|
//|==========================================================================================================================================================|

let produtos = [
    { nome: "Mouse", preco: 80.10, estoque: 3 },
    { nome: "Teclado", preco: 150.70, estoque: 1 },
    { nome: "Monitor", preco: 1500.20, estoque: 7 },
    { nome: "Headset", preco: 200, estoque: 5 },
    { nome: "", preco: 20, estoque: 10 }
];

let carrinho = [];

//|==========================|
//|Verificar produto. Existe?|
//|==========================|

function verificarProdutos (produto) {
    if (produtos.find(documentos => documentos.nome == produto)){
        console.log(`${produto} está disponivel pra venda!`)
        return true
    } else {
        console.log ("Não está disponível pra venda.")
        return false
    }
}
// verificarProdutos("Mouse")

//|======================|
//|Buscar produto. Aonde?|
//|======================|

function buscarProdutos(nome) {
   return produtos.findIndex(documentos => documentos.nome == nome)
    
}
// buscarProdutos("Teclado")

//|=========================================================|
//|Buscar catálogo de produtos, printando "1 Mouse - R$ 35";|
//|=========================================================|

function catalogoProdutos() {
    produtos.forEach(documentos => console.log(`${documentos.nome} - R$ ${documentos.preco} | Estoque Atual: ${documentos.estoque}`))
}

// catalogoProdutos()

//|=============================================|
//|Selecionar o produto e adicionar ao carrinho.|
//==============================================|

function adicionarCarrinho(novoProduto) {
    let i = carrinho.find(documentos => documentos.nome === novoProduto.nome)
    if(i){
        carrinho = carrinho.map (documentos => {
            if(documentos.nome === i.nome){
                return {...documentos, estoque:documentos.estoque+1}
            }
            return documentos
        })
        
    }else{
        carrinho.push(novoProduto)
    }
    console.log(i)
    console.log(carrinho)
}


adicionarCarrinho({ nome: "Mouse", preco: 80.10, estoque: 3 })
adicionarCarrinho({ nome: "Mouse", preco: 80.10, estoque: 3 })



    // let i = buscarProdutos(novoProduto)

    // if (!verificarProdutos(novoProduto)) return ("Produto não existe.");
    // if (carrinho.find(documentos => documentos.nome == novoProduto)) return ("Produto já está adicionado no carrinho!\n");
    //     carrinho.push(produtos[i]) 
    //     console.log("Item adicionado ao carrinho.\n")

 

//  adicionarCarrinho("SSD")
//  adicionarCarrinho("Teclado")


    
    //  if (!verificarProdutos(novoProduto)) return ("Produto não existe.");
    //  if (carrinho.includes(novoProduto)) return ("Produto já está adicionado no carrinho!\n")
    //       carrinho.push(novoProduto)
    //      console.log("Item adicionado ao carrinho.\n")



//adicionarCarrinho({ nome: "Mouse", preco: 80.10, estoque: 3 })
//adicionarCarrinho({nome: "Teclado", preco: 150.70, estoque: 1})
// adicionarCarrinho({ nome: "Monitor", preco: 1500.20, estoque: 7 })













