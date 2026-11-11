// |==========================================================|
// |FAZER UM FOMULARIO QUE TENHA NOME, EMAIL E IDADE.         |
// |PEGAR O VALOR DIGITADO E PREENCHER COM innerhtml, EXEMPLO:|
// |NOME: SAMUEL GOMES, EMAIL: SAMUEL@EMAIL.XOM, IDADE: 19+.  |
// |==========================================================|

const inputNome = document.getElementById("nome");
const inputIdade = document.getElementById("idade");
const inputEmail = document.getElementById("email");
const confirmarCadastro = document.getElementById("confirmar");
const caixaDeConfirmacao = document.getElementById("saida");

const spanNome = document.getElementById("nomeSpan");
const spanIdade = document.getElementById("idadeSpan");
const spanEmail = document.getElementById("emailSpan")


confirmarCadastro.addEventListener("click", mostrarDados)

function mostrarDados () {
    let bulean = true

    const nomeDigitado = inputNome.value;
    const idadeDigitada = inputIdade.value;
    const emailDigitado = inputEmail.value;

    if (nomeDigitado === ""){
        spanNome.innerText = "Faltando preencher o campo"
        bulean = false
    } else {
        spanNome = ""
    }
//    if(!nomeDigitado || nomeDigitado.trim() === "" || !isNaN(nomeDigitado.trim()) 
//     || !idadeDigitada || idadeDigitada.trim() === "" || isNaN(idadeDigitada.trim())
//     || !emailDigitado || emailDigitado.trim() === "" || !isNaN(emailDigitado.trim())){
//      return caixaDeConfirmacao.innerText = `ERRO DE DIGITAÇÃO:\nVerifique os campos\n-Não podem estar vazios;\n-Idade: apenas números são aceitos;\n-Verifique os campos E-mail e Nome.`
//     }
// return caixaDeConfirmacao.innerText = `Nome: ${nomeDigitado}\nIdade: ${idadeDigitada}\nE-mail: ${emailDigitado}`
}