// resposta:
// @Flávio (Almeida)@

//A função b esta recebendo a concatenação do nome com o sobrenome, mas veja que o sobrenome é o retorno da função a. A função a devolverá o sobrenome entre parênteses, daí, esse valor será concatenado com o nome e o resultado finalmente será passado para a função B.


<meta charset="UTF-8">

<script>
    function pulaLinha() {

        document.write("<br>");
    }

    function mostra(frase) {
        document.write(frase);
        pulaLinha();
    }

    function a(texto) {

        return "(" + texto + ")";
    }

    function b(texto) {

        return "@" + texto + "@";
    }

    function c(nome, sobrenome) {

        return b(nome + " " + a(sobrenome));

    }

    var resultado = c("Flávio", "Almeida");

    mostra(resultado);

</script>