// const produtos = ["Arroz", "Feijão", "Macarrão", "Açucar", "Café"];

// console.log(produtos[0]);
// console.log(produtos.length);

const produtos = ["Camiseta CodeLab", "Caneca JS", "Mousepad DOM", "Livro HTML/CSS", "TEclado", "Mouse", "Headfone", "RTX", "9090"];
const listaContainer = document.getElementById("lista-produtos");
const inputProdutoAdd = document.getElementById("input-adicionar");
const inputProdutoRmv = document.getElementById("input-remover");



function adicionarProduto(){
     produtos.push(inputProdutoAdd.value);
     carregarLista();

}

function removerProduto(){
    produtos.splice(inputProdutoRmv.value-1, 1)
    console.log(inputProdutoRmv.value)
    carregarLista();
}

function carregarLista(){  
    listaContainer.innerHTML= `
    <tr>
            <th>#</th>
            <th>Lista de Compras</th>
        </tr>
    
    `
    for (let i = 0; i < produtos.length; i++) {
      const itemLista = document.createElement("tr");
      const indice = document.createElement("td");
      const nome = document.createElement("td");
    
      indice.textContent = i + 1;
      nome.textContent = produtos[i];
      listaContainer.appendChild(itemLista);
      itemLista.appendChild(indice);
      itemLista.appendChild(nome);
    }
}

carregarLista() 