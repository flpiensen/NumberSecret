// app.js

let numeroSecreto = gerarNumeroAleatorio(); // Supondo que você já tem essa função
let tentativas = 1;

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1);
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

exibirMensagemInicial();

// Função para mostrar o input e os botões
function mostrarInputComBotoes() {
    document.querySelector('.input-com-botoes').style.display = 'block';
    // Oculta os elementos existentes, se necessário (ex: o troféu e o texto de "acertou!")
    document.querySelector('.container__imagem-robo').style.display = 'none';
    document.querySelector('.container__informacoes img').style.display = 'none'; // Imagem do troféu
    document.querySelector('.container__texto').style.display = 'none'; // Texto "Você acertou!"
}

// Função para esconder o input e os botões e mostrar a tela de sucesso
function esconderInputComBotoes() {
    document.querySelector('.input-com-botoes').style.display = 'none';
    // Mostra os elementos de sucesso
    document.querySelector('.container__imagem-robo').style.display = 'block';
    document.querySelector('.container__informacoes img').style.display = 'block'; // Imagem do troféu
    document.querySelector('.container__texto').style.display = 'block'; // Texto "Você acertou!"
}

// Adicionar um ouvinte de evento para o botão "Chutar"
document.getElementById('botaoChutar').addEventListener('click', verificarChute);

// Adicionar um ouvinte de evento para o botão "Reiniciar Jogo"
document.getElementById('botaoReiniciar').addEventListener('click', reiniciarJogo);


// Função principal que substitui o alert
function verificarChute() {
    let chute = parseInt(document.getElementById('numeroDigitado').value);

    if (chute === numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        
        // Aqui você pode chamar a função para mostrar a tela de sucesso
        esconderInputComBotoes(); // Esconde o input e botões e mostra a tela de sucesso
        document.getElementById('botaoReiniciar').removeAttribute('disabled'); // Habilita o botão de reiniciar
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo() {
    document.getElementById('numeroDigitado').value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('botaoReiniciar').setAttribute('disabled', true); // Desabilita o botão de reiniciar
    
    // Volta a mostrar o input e botões, escondendo a tela de sucesso
    mostrarInputComBotoes();
}

// Inicialmente, mostrar o input e os botões para o jogo começar
mostrarInputComBotoes();