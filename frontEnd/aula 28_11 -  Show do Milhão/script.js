let questoes = [
    {
        id: 1,
        enunciado: "Qual linguagem é muito utilizada para estruturar páginas da web?",
        opcoes: ["A) Python", "B) HTML", "C) JAVA"],
        respostaCerta: "B) HTML",
        pontos: 1000
    },
    {
        id: 2,
        enunciado: "Qual comando do JavaScript exibe uma informação no console?",
        opcoes: ["A) print", "B) display", "C) console.log"],
        respostaCerta: "C) console.log",
        pontos: 10000
    },
    {
        id: 3,
        enunciado: "Qual método transforma um objeto JavaScript em uma string JSON?",
        opcoes: ["A) JSON.parse", "B) JSON.stringify", "C) JSON.convert"],
        respostaCerta: "B) JSON.stringify",
        pontos: 100000
    },
    {
        id: 4,
        enunciado: "Qual estrutura de programação permite executar um bloco de código repetidamente enquanto uma condição for verdadeira?",
        opcoes: ["A) if", "B) switch", "C) while"],
        respostaCerta: "C) while",
        pontos: 100000
    },
    {
        id: 5,
        enunciado: "Em JavaScript, qual método é utilizado para percorrer todos os elementos de um array executando uma função para cada elemento?",
        opcoes: ["A) map", "B) filter", "C) forEach"],
        respostaCerta: "C) forEach",
        pontos: 1000000
    },
]
let idQuestaoAtual = null
let respostas = {
    1:"2"
}

let acertos = questoes.filter((item)=>{

    return respostas[item.id] == item.respostaCerta
})

let pontos = acertos.map((item)=>item.pontos);
pontos = pontos.reduce((a,b)=>a+b);




function comecar () {
// Validar nome
// Salvar nome
// Selecionar primeira questão
idQuestaoAtual= 1;
// Chamar carregar questão
console.log("chamou")
window.location.href = "questoes.html"
}

function carregarQuestao (){
   // document.
//Carregar um HTML novo
//Pegar a questão no array com base no id
//Imprimir o enunciado na tela
//Pegar as opções
//Imprimir as opções
}

function mudarQuestao (avancar){
//Esconder a questao atual
//Atualizar o id da questao atual
let novoId
if(avancar){
    novoId =  idQuestaoAtual + 1
} else {
    novoId = idQuestaoAtual - 1
}
//validar
if(novoId >= questoes.length){
    alert("Voce Completou todas as questoes pode clicar em enviar")
}else if(novoId <1){
    alert("Essa é a primeira questão")
} else {
    idQuestaoAtual = novoId
}
carregarQuestao()
//Carregar a questao
}

