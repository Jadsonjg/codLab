let contatos = [];
const barraLateral = document.getElementById("sidebar");
let passou = ""

//Busca o id dos inputs e retorna um objeto.
function buscarCamposFormulario() {
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value
    const cidade = document.getElementById("cidade").value;

    return { nome, telefone, email, cidade };
}
//Seta a estilização do sidebar do cadastro, aqui escolhemos como ela é mostrada.
function mostrarFormulario() {
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cidade").value = "";

    barraLateral.style.display = "inline";
};
//Seta a estilização do sidebar do cadastro, aqui escondemos ela.
function esconderFormulario() {
    barraLateral.style.display = "none";
};
//Cria um array de objetos, após validação, adicionando os elementos adicionados nos inputs a variavel "contatos".
function adicionarContato() {

    const novoContato = buscarCamposFormulario();

    validar();
    if (!passou) {
        return 
    }
    contatos.push(novoContato);

    exibirContatos();
    esconderFormulario();
}
//Usa o .creatElement e o .appendChild, para estruturar e mostrar na tela as informações do array de objetos "contatos".
function exibirContatos() {
    const corpoTabela = document.getElementById("lista");
    corpoTabela.innerHTML = "";

    contatos.forEach((contatos, index) => {
        const linha = document.createElement("tr");

        const celulaNome = document.createElement("td");
        celulaNome.textContent = contatos.nome;

        const celulaTelefone = document.createElement("td");
        celulaTelefone.textContent = contatos.telefone;

        const celulaEmail = document.createElement("td");
        celulaEmail.textContent = contatos.email;

        const celulaAcoes = document.createElement("td");

        const botaoEditar = document.createElement("button");
        botaoEditar.textContent = "Editar"
        botaoEditar.onclick = function () { editarContato(index); };

        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover"
        botaoRemover.onclick = function () { removerContato(index); };

        celulaAcoes.appendChild(botaoEditar);
        celulaAcoes.appendChild(botaoRemover);

        linha.appendChild(celulaNome);
        linha.appendChild(celulaTelefone);
        linha.appendChild(celulaEmail);
        linha.appendChild(celulaAcoes);
        corpoTabela.appendChild(linha);
    })
};

let indiceEditando = null;

function editarContato(index) {
    const contato = contatos[index];
    document.getElementById("nome").value = contato.nome;
    document.getElementById("telefone").value = contato.telefone;
    document.getElementById("email").value = contato.email;
    document.getElementById("cidade").value = contato.cidade;

    const salvarButton = document.getElementById("salvar");

    indiceEditando = index;
    salvarButton.onclick = salvarEdicao
    mostrarFormulario();
}

function salvarEdicao() {
    contatos[indiceEditando] = buscarCamposFormulario()
    validar();
    exibirContatos();
    esconderFormulario();
    indiceEditando = null;

}

function removerContato(index) {
    contatos.splice(index, 1);
    exibirContatos();
}

function validar() {
    passou = false
    const erro = document.getElementById("saida");
    erro.innerText = ''
    const contatosValidar = buscarCamposFormulario();


    //nome
    if (contatosValidar.nome.trim() === "") {
        return erro.innerText = "Preencha o campo Nome"
    }
    //telefone
    if (contatosValidar.telefone.trim() === "") {
        return erro.innerText = "Preencha o campo telefone"
    }
    //email
    if (contatosValidar.email.trim() === "") {
        return erro.innerText = "Preencha o campo Email"
    }
    //cidade
    if (contatosValidar.cidade.trim() === "") {
        return erro.innerText = "Preencha o campo Cidade"
    }
    passou = true;
}


