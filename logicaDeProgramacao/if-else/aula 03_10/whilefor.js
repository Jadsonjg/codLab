// 1 - CRIE UM LOOP QUIE MOSTRARÁ NA TELA DE 1 A 10

/*let i = 1
while (i < 11) {
    console.log(i)
    i++
}*/


/// 2 - MOSTRAR UMA CONTAGEM REGRESSIVA E AO FINAL "LANÇAR!"

/*let i = 10

console.log("Preparar!!")

while (i >= 0) {
    console.log(i)
    --i
}

console.log("Lançar!!");*/


//// 3 - TABUADA DE 1 A 10

/*console.log(`TABUADA DE 4`)
for (let i = 0; i <= 10; ++i) {
    console.log(`4 X ${i} = ${i*4}`)
}*/


///// 4 - DESCOBRIR O TOTAL DA SOMA DOS NUMEROS INTEIROS DE 1 A 10

/*let soma = 0
for (i=0;i<11;i++) {
    soma += i
    console.log(soma)
}*/


////// 5 - A SOMA DE TODOS OS NUMEROS PARES DE 1 A 20


/*let soma = 0

for (i=0;i<=20;i++) {
        if (i % 2 == 0) {
            soma += i
            console.log(`${i} + ${soma-i} = ${soma}`)
    }
}*/

/////// 6 - PERCORRER DE 1 A 20 MOSTRAR APENAS OS MAIORES QUE 10

/*for (i=0;i<=20;i++) {
    if (i>10){
        console.log(i)
    }
}*/


//////// 7 - RECEBER NUMERO E CALCULAR FATORIAL

/*let numero = 1

for (i=5;i>0;--i) {
    console.log(`${numero} * ${i}`)
    numero *= i
    console.log(numero)
}
console.log(`O fatorial de 5! é igual a ${numero}`)*/

////////// 8 - PERCORRER UM ARAY DE NOTAS E PRINTAR O TOTAL DE APROVADOS E DE REPROVADOS, (MEDIA É IGUAL A 7).

/*let notas = [10, 8, 7.5, 4, 5.5, 7, 6]
let aprovado = 0
let reprovado = 0

for (i=0;i<notas.length;i++) {
    if (notas[i]>=7){
        aprovado++
    } else {
        reprovado++
    }
}
console.log(`O total de alunos aprovados, foram: ${aprovado}.\nE o total de alunos reprovados, foram: ${reprovado}.`)*/


///////// 9 - PRINTAR A MEDIA DAS NOTAS APROVADAS, EM UM ARRAY DE NOTAS

/*let notas = [10, 8, 7.5, 4, 5.5, 7, 6]
let soma = 0
let aprovadas = 0

for(i=0;i<=notas.length;i++) {
    if (notas[i]>=7) {
        soma+=notas[i]
        aprovadas++
    }
}
console.log(`A média das notas aprovadas foi ${soma/aprovadas}`)*/


function aprovadosReprovados (notasRecebidas){
    let aprovado = 0
    let reprovado = 0

    for (i=0;i<notasRecebidas.length;i++) {
    if (notasRecebidas[i]>=7){
        aprovado++
    } else {
        reprovado++
    }
}
console.log(`O total de alunos aprovados, foram: ${aprovado}.\nE o total de alunos reprovados, foram: ${reprovado}.`)

}


function mediaDosAprovados (notasRecebidas){
let soma = 0
let aprovadas = 0

for(i=0;i<=notasRecebidas.length;i++) {
    if (notasRecebidas[i]>=7) {
        soma+=notasRecebidas[i]
        aprovadas++
    }

}

console.log(`A média das notas aprovadas foi ${soma/aprovadas}`)
}





function main (num) {
    let notas1= [10, 8, 7.5, 4, 5.5, 7, 6]
    let notas2= [7, 7, 2.5, 1, 5.5, 1, 6]
    if (num == 1) {
        aprovadosReprovados(notas1)
    } else if (num==2){
        mediaDosAprovados (notas2)
    }
}

main (2)
