let games = [
    {id: 1,nome: "MINECRAFT", tipo: "Aventura", nota:9.9},
    {id: 2,nome: "LEAGUE OF LEGENDS", tipo: "MOBA", nota:6.5},
    {id: 3,nome: "BOMBA PATCH (100% ATUALIZADO)", tipo: "Esporte", nota:10},
    {id: 4,nome: "GOD OF WAR II", tipo: "Hack and Slash, Ação", nota:9.5},
    {id: 5,nome: "COUNTER STRIKE 2.0", tipo: "FPS", nota:8.9},
    {id: 6,nome: "CAFÉ MANIA", tipo: "Social", nota:8}
]

let favoritos = []
//|===========================================================================================================================|
//|Criar uma função: listarJogos, que irá percorrer o array de jogos, e exibir uma lista com nome, gênero e nota de cada jogo.|
//|===========================================================================================================================|

function listarJogos (games){
    games.forEach(game=>console.log(`Jogo:\n${game.nome}\nGênero: ${game.tipo} - Nota:${game.nota}\n`));
}

// listarJogos (games)

//|=================================================================================================================|
//|Criar uma função: buscarJogo, percorrer o array de jogos e verificar se ele existe ou não, printando o resultado.|
//|=================================================================================================================|

function buscarJogo (nome){
   let busca = games.find(game=>game.nome === nome.toUpperCase())
        if (busca){
            console.log(busca)
        console.log(`Game encontrado:\n${busca.nome} - Nota: ${busca.nota}`)
            }else {console.log("Jogo não existe na lista.")
   }
}

// buscarJogo ("Minecraft")

//|=============================================================================|
//|Criar função que filtra por nota e por genero. E printa a lista na sequencia.|
//|=============================================================================|

function filtrarListaNota (nota){
    let filtroNota = games.filter(game=>game.nota >= nota);
        filtroNota.forEach(item=>console.log(`Jogos com nota a partir de ${nota}:\n${item.nome}\nNota:${item.nota}\n`));
}

// filtrarListaNota (9)

function filtrarListaGenero (genero){
    let filtroGenero = games.filter(game=>game.tipo === genero);
        filtroGenero.forEach(item=>console.log(`Games do Gênero ${item.tipo}:\n${item.nome}\n`));
}

// filtrarListaGenero ("Esporte")

//|==============================================================================================================================|
//|Gerar catálogo, criar um array que recebe como valor, nome, tipo e nota, de cada um dos jogos. Imprimir esse array por indice.|
//|==============================================================================================================================|


function gerarCatalogo (){
    let catalogo = games.map(game=>{
    return `${game.nome} | ${game.tipo} | ${game.nota}`
    })
return catalogo
}

// console.log(gerarCatalogo())

//|===============================================================================|
//|Adicionar favorito. Criar uma função que adicione o jogo na lista de favoritos.|
//|===============================================================================|

function adicionarFavorito (id){
    let busca = games.find(game=>game.id===id)
    let buscaFav = favoritos.find(game=>game.id===id)
    if (!busca) return console.log ("Esse jogo não existe, na lista de jogos.");
    if (buscaFav) return console.log("Esse jogo já existe na lista de favoritos.");
    favoritos.push(busca)
    console.log("Jogo adicionado com sucesso.", favoritos)
}

// adicionarFavorito(1)
// adicionarFavorito(5)
// adicionarFavorito(5)
// adicionarFavorito(10)


//|====================================================================================================================================|
//|Recomendar jogos. Criar função que filtra por nota minima os jogos, que serão indicados. E entrega um array com nome e nota do jogo.|
//|====================================================================================================================================|

function recomendarGame (notaMinima){
    return games.filter(game=>game.nota >= notaMinima).map(game=>{
        return `${game.nome} - Nota: ${game.nota}`
    })
}

console.log(recomendarGame (8))

//|================================================================================================|
//|Gerar resumo de favoritos. Criar função gerarResumoFavoritos. Exibir a lista em uma unica frase.|
//|================================================================================================|

function gerarResumoFavoritos(){

}

gerarResumoFavoritos()


//|=============================================================================================|
//|Conectar miniapp.  Criar uma função main() para executar o fluxo demonstrável: listar jogos, |
// ?buscar jogo, adicionar favoritos, mostrar catalogo, recomendações e o resumo final.         |
//|=============================================================================================|


function main (){
    
}

