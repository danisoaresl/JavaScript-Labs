// Exibir uma mensagem de boas-vindas no console
console.log("Bem-vindo!");

// Exibir uma mensagem de saudação usando o alert
var nome = "SeuNome";
alert("Olá, " + nome + "!");

// Pedir ao usuário para inserir sua linguagem de programação favorita
var linguagem = prompt("Qual a linguagem de programação que você mais gosta?");
console.log("Sua linguagem de programação favorita é: " + linguagem);

// Realizar a soma de dois valores
var valor1 = 10;
var valor2 = 5;
var resultadoSoma = valor1 + valor2;
console.log("A soma de " + valor1 + " e " + valor2 + " é igual a " + resultadoSoma + ".");

// Realizar a subtração de dois valores
var resultadoSubtracao = valor1 - valor2;
console.log("A diferença entre " + valor1 + " e " + valor2 + " é igual a " + resultadoSubtracao + ".");

// Verificar se o usuário é maior ou menor de idade
var idade = prompt("Qual é a sua idade?");
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// Verificar se um número é positivo, negativo ou zero
var numero = prompt("Digite um número:");
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

// Imprimir números de 1 a 10 usando um loop while
var contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

// Determinar se uma nota é aprovada ou reprovada
var nota = parseFloat(prompt("Digite a sua nota:"));
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// Gerar um número aleatório entre 0 e 1 e exibir no console
var numeroAleatorio = Math.random();
console.log("Número aleatório entre 0 e 1: " + numeroAleatorio);

// Gerar um número inteiro entre 1 e 10 e exibir no console
var numeroInteiro1a10 = Math.floor(Math.random() * 10) + 1;
console.log("Número inteiro entre 1 e 10: " + numeroInteiro1a10);

// Gerar um número inteiro entre 1 e 1000 e exibir no console
var numeroInteiro1a1000 = Math.floor(Math.random() * 1000) + 1;
console.log("Número inteiro entre 1 e 1000: " + numeroInteiro1a1000);
