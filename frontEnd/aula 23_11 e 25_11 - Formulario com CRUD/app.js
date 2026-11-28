let contatos = [];
const barraLateral = document.getElementById("sidebar");
let passou = ""

//|=======================================================================================================================|
//|Essa função localiza os inputs pelos seus IDs, captura os valores preenchidos e retorna um objeto contendo esses dados.|
//|=======================================================================================================================|
function buscarCamposFormulario() {
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value
    const cidade = document.getElementById("cidade").value;

    return { nome, telefone, email, cidade };
}

//|===================================================================================================|
//|Limpa os valores dos inputs e torna a barra lateral visível, alterando sua propriedade CSS display.|
//|===================================================================================================|
function mostrarFormulario() {
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cidade").value = "";

    barraLateral.style.display = "inline";
};

//|===============================================================================================|
//|Seta a estilização do sidebar do cadastro, aqui escondemos ela, mudando o .display para "none".|
//|===============================================================================================|
function esconderFormulario() {
    barraLateral.style.display = "none";
};

//|=========================================================================================================|
//|Captura os dados do formulário em um objeto, valida o preenchimento e adiciona o objeto ao array contatos|
//|usando push(). Atualiza a tabela e esconde o formulário.                                                 |
//|=========================================================================================================|
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

//|========================================================================================================================|
//|Limpa o conteúdo atual da tabela e percorre o array contatos utilizando forEach(), acessando cada objeto e seu          |
//|respectivo índice. Cria linhas, células e botões utilizando createElement() e os insere no DOM utilizando appendChild().|                                                |
//|========================================================================================================================|
function exibirContatos() {
    const corpoTabela = document.getElementById("lista");
    corpoTabela.innerHTML = "";

    contatos.forEach((loop, index) => {
        const linha = document.createElement("tr");

        const celulaNome = document.createElement("td");
        celulaNome.textContent = loop.nome;

        const celulaTelefone = document.createElement("td");
        celulaTelefone.textContent = loop.telefone;

        const celulaEmail = document.createElement("td");
        celulaEmail.textContent = loop.email;

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

//|==================================================================================================================|
//|Captura e valida os dados editados. Substitui o contato no índice armazenado em indiceEditando, atualiza a tabela,|
//|esconde o formulário e redefine indiceEditando como null.                                                         |          
//|==================================================================================================================|
function salvarEdicao() {

    validar();
      if (!passou) {
        return 
    }
    contatos[indiceEditando] = buscarCamposFormulario()
    exibirContatos();
    esconderFormulario();
    indiceEditando = null;

}

//|=====================================================================================================================|
//|Recupera o contato pelo índice recebido, preenche os inputs com seus dados, registra o índice que será editado e     |
//|associa ao botão Salvar a função salvarEdicao, exibindo o formulário de edição.                                      |   
//|=====================================================================================================================|
function editarContato(index) {
    mostrarFormulario();
    const contato = contatos[index];
    document.getElementById("nome").value = contato.nome;
    document.getElementById("telefone").value = contato.telefone;
    document.getElementById("email").value = contato.email;
    document.getElementById("cidade").value = contato.cidade;
    
    indiceEditando = index;

    const salvarButton = document.getElementById("salvar");

    salvarButton.onclick = salvarEdicao
}

//|====================================================================================================================|
//|Função simples que usa o indice captura em adicionarContatos para executar um .splice, e remover o elemento indicado|
//|do array contatos, após isso ele chama exibirContatos(), para atualizar a lista exibida sem o elemento.             |
//|====================================================================================================================|
function removerContato(index) {
    contatos.splice(index, 1);
    exibirContatos();
}

//|===========================================================================================================================|
//|Define passou como false e verifica se existem campos vazios ou preenchidos somente com espaços. Caso encontre um campo    |
//|inválido, exibe uma mensagem de erro e encerra a função. Se todos os campos estiverem preenchidos, altera passou para true.|
//|===========================================================================================================================|
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

function conversaoTexto () {
    const contatosTexto = JSON.stringify(contatos);
}


