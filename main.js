const formulario = document.getElementById('form-teste')
const nomeCliente = document.getElementById('nomeCliente');
let formularioEhValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
  return nomeComoArray.length >= 2; //tranforma o nome em um array retornando true se o array for maior ou igual a 2
}

formulario.addEventListener('submit', function(e) {
    e.preventDefault(); //Previne que a página atualize quando um evento de submit for acionado

    const emailCliente = document.getElementById('emailCliente');
    const mensagemCliente = document.getElementById('mensagemCliente');
    
    const mensagemSucesso = `Obrigado <b>${nomeCliente.value}</b> pela sua mensagem!`;


    formularioEhValido = validaNome(nomeCliente.value);
    if (formularioEhValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso; //querySelector pega o primeiro elemento com tal descrição e o innerHTML altera este elemento
        containerMensagemSucesso.style.display = 'block';  //Essa é a sintaxe para pegar o estilo do elemento.
        nomeCliente.value = '';
        emailCliente.value = '';  //value é para pegar a informação ou valor do input
        mensagemCliente.value = '';    //Zerando as informações do cliente nos input caso esteja tudo certo.
    } else {
        nomeCliente.style.border = '1px solid red';
        document.querySelector('.message-error').style.display = 'block';
    }
})

nomeCliente.addEventListener('keyup', function(e) {   //o "e" do function representa o evento, a keyup atualiza a cada letra inserida pelo usuario, o change atualiza a cada vez que o usuario termina de digitar e tira de foco o input.
    console.log(e.target.value);
    formularioEhValido = validaNome(e.target.value);

    if (!formularioEhValido) {
        nomeCliente.classList.add('error'); //error é uma classe diferenciada, de uma olhada no CSS
        nomeCliente.style.border = '1px solid red'; //deixei ele aqui pois quando não tem nada escrito e o input é tirado de foco, ele tira a borda (OBS: São dois jeitos de fazer essa estilização, com essa linha e com a outra que está no else. Porém com o add é melhor.)
        document.querySelector('.message-error').style.display = 'block';
    } else {
        nomeCliente.classList.remove('error');
        nomeCliente.style = '';
        document.querySelector('.message-error').style.display = 'none';
    }
});