alert('Boas vindas ao jogo do número secreto..');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Digite um valor entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor ${chute}`);
        } else {
            alert(`O número secreto é maior ${chute}`);
        }

        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns, você acertou o numero secreto é ${numeroSecreto} com ${tentativas} ${palavraTentativa}!!`);