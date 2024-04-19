alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 1 e 10'); 

// Converte o chute do usuário para um número
chute = parseInt(chute);

if (chute === numeroSecreto) {
    console.log('Isso aí! Você descobriu o número secreto (5)');
} else {
    console.log('Ops! Não foi dessa vez. O número secreto era 5');
}