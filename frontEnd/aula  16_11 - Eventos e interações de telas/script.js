 const nomeInput = document.getElementById('nome');
    const idadeInput = document.getElementById('idade');
    const emailInput = document.getElementById('email');
    const confirmarBtn = document.getElementById('confirmarBtn');
    const saida = document.getElementById('saida');
    const dica = document.getElementById("dica");

    confirmarBtn.addEventListener('click', function () {
      const nome = nomeInput.value;
      const email = emailInput.value;

      saida.innerText = `Inscrição feita: ${nome} (${email})`;
    });

function mostrarDica() {
  dica.innerText = 'Use o e-mail que você mais olha.';
  emailInput.removeEventListener('focus', mostrarDica);
}
// function apagarDica() {
//   emailInput.addEventListener('blur', apagarDica);
// }
// emailInput.addEventListener('mouseleave', apagarDica);
emailInput.addEventListener('mouseenter', mostrarDica);