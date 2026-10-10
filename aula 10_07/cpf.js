//MISSÃO: VALIDAR UM CPF
//SECUNDÁRIAS: 1. SOMENTE NUMERO; 2. 11 DIGITOS; 3. !111.111.111-11

const cpf = "529.982.247-25"
let  validador = [0,1,2,3,4,5,6,7,8,9]
let cpfLimpo = "";

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



