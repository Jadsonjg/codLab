// function calcularDesconto(preco, percentual) {
//   const valorDesconto = preco * (percentual / 100);
//   const precoFinal = preco - valorDesconto;
//   console.log(`Preço final: R$${precoFinal}`);
// }

// calcularDesconto(80, 20);

//Criar uma função que calcule a média de três números e retorne o resultado.
/* function calcularMedia(nota1, nota2, nota3){
let media = (nota1 + nota2 + nota3) / 3;
console.log(`A média das notas é: ${media}`);
}

calcularMedia(8, 8, 8) */

//ARRAYS E LOOP

// let notas = [7.5, 8.0, 6.2, 9.0]; 

// for (let i = 0; i < notas.length; i++) {
//     console.log(`Nota na posição ${i}: ${notas[i]}`);
// }

// ATUALIZAR A MEDIA COM O USO DE ARRAYS E LOOP

let notas = [9, 7, 9, 7]
function calcular(notas){
    let media = 0;
    for (let i = 0; i < notas.length; i++) {
      media += notas[i];
    }
    media  /= notas.length
    console.log(`A média das notas é: ${media}`);
}

calcular(notas)
