//Se quisermos exibir um pop-up, que mostre uma pergunta e permita ao usuário entrar com um valor, fazemos uso da função prompt.

// Usando a função prompt, qual das opções abaixo lê dois números, do teclado, e exibe a multiplicação de um por outro para o usuário?

<meta charset="UTF-8">

<script>
    function pulaLinha() {

        document.write("<br>");
    }

    function mostra(frase) {
        document.write(frase);
        pulaLinha();
    }

    var numero1 = prompt("Digite o primeiro número");
    var numero2 = prompt("Digite o segundo número");

    mostra("O valor de " + numero1 + " vezes " + numero2 + " é: " + (numero1 * numero2));

</script>