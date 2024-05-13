// Mensagem de boas-vindas usando console.log
console.log("Bem-vindo!");

// Exibir mensagem com nome usando console.log
let nome = "ChatGPT";
console.log("Olá, " + nome + "!");

// Exibir mensagem com nome usando alert
alert("Olá, " + nome + "!");

// Perguntar a linguagem de programação preferida e exibir no console
let linguagem = prompt("Qual a linguagem de programação que você mais gosta?");
console.log("A linguagem de programação que eu mais gosto é: " + linguagem);

// Soma de dois valores e exibição do resultado
let valor1 = 5;
let valor2 = 7;
let resultadoSoma = valor1 + valor2;
console.log("A soma de " + valor1 + " e " + valor2 + " é igual a " + resultadoSoma + ".");

// Subtração de dois valores e exibição do resultado
let resultadoSubtracao = valor1 - valor2;
console.log("A diferença entre " + valor1 + " e " + valor2 + " é igual a " + resultadoSubtracao + ".");

// Verificar se a pessoa é maior ou menor de idade
let idade = prompt("Por favor, insira sua idade:");
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// Verificar se um número é positivo, negativo ou zero
let numero = prompt("Insira um número:");
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

// Imprimir números de 1 a 10 usando um loop while
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

// Verificar se a nota é maior ou igual a 7
let nota = 8;
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// Gerar um número aleatório entre 0 e 1 e exibir no console
let numeroAleatorio = Math.random();
console.log("Número aleatório entre 0 e 1: " + numeroAleatorio);

// Gerar um número inteiro aleatório entre 1 e 10 e exibir no console
let numeroInteiroAleatorio = Math.floor(Math.random() * 10) + 1;
console.log("Número inteiro aleatório entre 1 e 10: " + numeroInteiroAleatorio);

// Gerar um número inteiro aleatório entre 1 e 1000 e exibir no console
let numeroInteiroAleatorio1000 = Math.floor(Math.random() * 1000) + 1;
console.log("Número inteiro aleatório entre 1 e 1000: " + numeroInteiroAleatorio1000);
