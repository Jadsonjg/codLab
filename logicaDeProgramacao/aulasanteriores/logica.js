// O sistema deve fazer uma contagem de 10 até 1,
// e quando chegar em 1, deve exibir a mensagem "Já pode largar!".   

// let largadaEm= 10

// while(largadaEm > 0){
//     console.log(largadaEm);
//     largadaEm = largadaEm -1;
// }
// console.log("Já pode largar!");


//Imprimir numeros de 1 a 100, mas apenas os números pares.


// let numero = 1

// while(numero < 101){
//     if(numero % 2 == 0){
//         console.log(numero)
//     }
//     numero++
// }

//Exemplo do slide

// for (let A = 1; A <= 3; A++) {
//     console.log(`Tabuada do ${A}:`);
//     for (let B = 1; B <= 3; B++) {
//         console.log(`${A} X ${B} = ${A * B}`);
//     }
// }

//Exemplo do professor


// Somar todos os valores entre 1 e 10.

// for (let soma = 1; soma <= 10; soma++) {
//     console.log(`Um mais ${soma} é igual a ${1 + soma}`)
// }

// Somar todos os valores entre 1 e 10. Aonde o resultado da soma anterior será somado com o próximo valor.
// let resultado = 0;
// for (let soma = 1; soma <= 10; soma++) {
//     resultado += soma;
//     console.log(`A soma de todos os valores entre ${resultado - soma} e ${soma} é igual a ${resultado}`);
// }

//O usuário deve informar seu peso e sua altura, e o sistema deve calcular o IMC (Índice de Massa Corporal) do usuário. 
//O IMC é calculado dividindo o peso pela altura ao quadrado. 
//O sistema deve exibir o resultado do IMC e a se ele está obeso ou não. O IMC é considerado obeso quando o resultado é maior ou igual a 30.

// import * as readline from 'node:readline/promises';
// import { stdin as input, stdout as output } from 'node:process';
// const rl = readline.createInterface({ input, output }); /// Codigo fixo não apagar

// let peso = await rl.question('Qual é o seu peso? ');
// peso = Number(peso);
// let altura = await rl.question('Qual é a sua altura? ');
// altura = Number(altura) / 100; //Converter para metros
// let imc = peso / (altura * altura);

//     if (imc >= 30) {
//         console.log("Você está obeso");
//     } else {
//         console.log("Você não está obeso");
//     }
//     console.log(`Seu IMC é ${imc}`);
    


