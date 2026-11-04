let jogador1 ={
nome:"Sergio",
pontos:50
}

let jogador2 ={
nome:"Caio",
pontos:60
}

let jogador3 ={
nome:"Rodrigo",
pontos:60
}

//printar quem venceu "O <nome do jogador> ganhou por x pontos"

function verificar (jogador1, jogador2){
    if (jogador1.pontos>jogador2.pontos){
        console.log(`Com um total de ${jogador1.pontos} pontos.\nO vencedor foi ${jogador1.nome}!!`)
    }else if(jogador1.pontos<jogador2.pontos){
        console.log(`Com um total de ${jogador2.pontos} pontos.\nO vencedor foi ${jogador2.nome}!!`)
    }else{
        console.log(`Com um total de ${jogador1.pontos}.\nO resultado foi um EMPATE!`)
}
}

// verificar(jogador2, jogador3)


//CRIAR UM PROGRAMA QUE MOSTRE OS CREDITOS FINAIS DE UM FILME.
//REGRAS:
//-O NOME DO FILME NO COMEÇO;
//O PAPEL DE CADA PARTICIPANTE, COM O NOME DA PESSOA LOGO ABAIXO;
//-UMA LINHA EM BRANCO ENTRE UM PARTICIPANTE E OUTRO;
//-A PALAVRA 'FIM' NO FINAL
//-PELO MENOS 6 PARTICIPANTES;
//-NAO VALE ESCREVER UMA LINHA DE IMPRESSÃO PARA CADA PARTICIPANTE;
//-USAR O seTimeout;


function setar (){
console.log("3 segundos")
}


setTimeout (setar, 3000)
