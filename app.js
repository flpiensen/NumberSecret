alert('Boas vindas ao jogo do número secreto');
let numeroMinimo = 1;
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + numeroMinimo);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enqunto o chute nao for igual ao numero secreto o jogo nao para
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre ${numeroMinimo} e ${numeroMaximo}`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;        
    } else {
        if (numeroSecreto > chute) {
        alert(`😒O número secreto é maior que ${chute}`);
        } else {
        alert (`😒O número secreto é menor que ${chute}`);
        }
        //Tentativas no local que eu dediquei para quando o usuário erra ou acerta o número
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`🎉Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);


//if (tentativas > 1) {
//    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//} else {
//    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}

