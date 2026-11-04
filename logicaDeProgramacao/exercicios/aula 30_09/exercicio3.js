//FAÇA UMA FUNÇAO QUE FORMATA A MENSAGEM PARA O USUARIO QUE SE AUTENTICAR NO SISTEMA, RETORNAR "BEM VINDO, USUÁRIO"

/*function boasVindas (nomeDoUsuario){
    return console.log(`Bem vindo, ${nomeDoUsuario}!`)
}

boasVindas("Jadson")*/

//RETORNE AGORA A MESMA MENSAGEM SO QUE PARA VARIOS USUARIOS

const usuarios = ["Railson", "Moisés", "Samuel", "Flávio"]

function boasVindas (nomeDoUsuario) {
    for (i = 0; i< usuarios.length;i++) {
        console.log(`Bem-vindo, `)
    }
}
