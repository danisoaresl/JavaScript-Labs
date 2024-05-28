//Desafios finais
//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

//Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

//Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

//Use um loop while para imprimir os números de 1 a 10 no console.

//Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

//Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

//Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

//Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.


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
