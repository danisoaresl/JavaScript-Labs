alert('Boas vindas ao nosso site!');
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

// Exibe um alerta com o valor da variável mensagemDeErro
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);

// Usa um prompt para perguntar o nome do usuário e armazena-o na variável nome
nome = prompt("Qual é o seu nome?");

// Pede ao usuário para digitar sua idade usando um prompt e armazena-a na variável idade
idade = prompt("Qual é a sua idade?");

// Converte a entrada do prompt para um número
idade = parseInt(idade);

// Verifica se a idade é maior ou igual a 18 e exibe um alerta apropriado
if (idade >= 18) {
    alert("Pode tirar a habilitação!");
}