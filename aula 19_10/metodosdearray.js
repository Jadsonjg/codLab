const turma = [
  { id: 1, nome: "Flávio", funcao: "Professor", idade: 35, altura: 1.74},
  { id: 2, nome: "Ítalo", funcao: "Professor", idade: 23, altura: 1.75},
  { id: 3, nome: "Samuel", funcao: "Professor", idade: 26, altura: 1.79},
  { id: 4, nome: "Moisés", funcao: "Professor", idade: 20, altura: 1.77},
  { id: 5, nome: "Railson", funcao: "Professor", idade: 27, altura: 1.70},
  { id: 6, nome: "Abner Levi", funcao: "Aluno", idade: 18, altura: 1.72},
  { id: 7, nome: "Jadson", funcao: "Aluno", idade: 27, altura: 1.84},
  { id: 8, nome: "Diogo", funcao: "Aluno (E funcionário infiltrado)", idade: 19, altura: 1.80},
  { id: 9, nome: "Mathews", funcao: "Aluno", idade: 23, altura: 1.75},
  { id: 10, nome: "João", funcao: "Aluno", idade: 18, altura: 1.78},
  { id: 11, nome: "Ryan", funcao: "Aluno", idade: 17, altura: 1.76},
  { id: 12, nome: "Thales", funcao: "Aluno", idade: 19, altura: 1.82}
];
//|================================================================================================================================|
//|Criar uma função que recebe a lista da turma, e printa na tela todos os integrantes que tem acima de 21 anos, usando o .forEach.|
//|================================================================================================================================|

function maiorDe21 (turma){
    turma.forEach(doc => {
        if(doc.idade > 21){
            console.log(`Membro ${doc.nome}, tem ${doc.idade} anos.`)
    }})  
};


// maiorDe21(turma)

const turmav2 = [
  { id: 1, aluno: "Abner", nota1: 7.6, nota2: 8.4, nota3: 6.2 },
  { id: 2, aluno: "Jadson", nota1: 9.1, nota2: 4.5, nota3: 7.8 },
  { id: 3, aluno: "Diogo", nota1: 5.3, nota2: 8.9, nota3: 6.0 },
  { id: 4, aluno: "Ryan", nota1: 3.8, nota2: 7.2, nota3: 9.5 },
  { id: 5, aluno: "Mathews", nota1: 10.0, nota2: 6.4, nota3: 8.1 },
  { id: 6, aluno: "Thales", nota1: 4.9, nota2: 9.3, nota3: 5.7 },
  { id: 7, aluno: "João Erick", nota1: 8.0, nota2: 7.1, nota3: 6.6 }
];
//|=======================================================================|
//|Retorne um novo array contendo o valor de media dentro de cada objeto, |
//|esse valor deve ser obtido com base no cálculo das notas de cada aluno.|
//|=======================================================================|

function calcularMedia (turmav2){
   let turmav3 = turmav2.map(media => {
   return {...media, media:(media.nota1 + media.nota2 + media.nota3) / 3}
   })
console.log(turmav3)

}
calcularMedia(turmav2)


