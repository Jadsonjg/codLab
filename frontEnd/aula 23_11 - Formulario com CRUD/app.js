let contatos = [];
const barraLateral = document.getElementById("sidebar");
const salvar = document.getElementById("salvar");
let passou 

function buscarCamposFormulario() {
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value
    const cidade = document.getElementById("cidade").value;

    return { nome, telefone, email, cidade };
}

function mostrarFormulario() {
    barraLateral.style.display = "inline";
};


function esconderFormulario() {
    barraLateral.style.display = "none";
};

function cadastrar() {
    salvar.onclick = adicionarContato;
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cidade").value = "";

    mostrarFormulario();

}

function adicionarContato() {


    const novoContato = buscarCamposFormulario();

    validar();
    if (!passou) {
        return 
    }
    contatos.push(novoContato);

    renderiziarContatos();
    esconderFormulario();

}

function renderiziarContatos() {
    const corpoTabela = document.getElementById("lista");
    corpoTabela.innerHTML = "";

    contatos.forEach((contatos, index) => {
        const linha = document.createElement("tr");

        const celulaNome = document.createElement("td");
        celulaNome.textContent = contatos.nome;

        const celulaTelefone = document.createElement("td");
        celulaTelefone.textContent = contatos.telefone;

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

    indiceEditando = index;
    salvar.onclick = salvarEdicao
    mostrarFormulario();
}

function salvarEdicao() {
    contatos[indiceEditando] = buscarCamposFormulario()
    validar();
    renderiziarContatos();
    esconderFormulario();
    indiceEditando = null;

}



function removerContato(index) {
    contatos.splice(index, 1);
    renderiziarContatos();
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


