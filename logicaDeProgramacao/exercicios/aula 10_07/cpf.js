//MISSÃO: VALIDAR UM CPF
//SECUNDÁRIAS: 1. SOMENTE NUMERO; 2. 11 DIGITOS; 3. !111.111.111-11

const cpf = "529.982.247-25"
let  validador = [0,1,2,3,4,5,6,7,8,9]
let cpfLimpo = "";
let quantidade = 9
let verificacao = []

function limparCpf (){
    for (let i=0;i<cpf.length;i++) {
        if(validador.includes(Number(cpf[i]))){  
            cpfLimpo += cpf[i]
        }
    }
    return cpfLimpo
} 

limparCpf();
// console.log(cpfLimpo.length)

function verificarQuantidade(){
    if (cpfLimpo.length == 11) {
        return console.log("O CPF possui 11 caracteres")
    } 
    console.log("O CPF não possui 11 caracteres")

}

verificarQuantidade()


function verificarPrimeiroDigito (cpfLimpo, quantidade){
    let peso = quantidade + 1
    let resultado = 0
    let soma = 0
    for (let i = 0; i<quantidade; ++i){
        cpfLimpo[i]
        peso--
      resultado = cpfLimpo[i]*peso
      verificacao.push(resultado)        
    }

    
let resto = soma % 11
    if (resto<2){
        return 0
    }else{
        return 11 - resto;
    }

}
console.log(verificarPrimeiroDigito (cpfLimpo, quantidade))


