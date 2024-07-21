// Veja operação estamos somando o resultado, ou seja, o retorno da função a(10,20) com o retorno da função b(30,2). 
// A primeira função retorna 30 e a segunda 15. No final temos a soma dos dois número, que dá 45.



<meta charset="UTF-8">

<script>
    function pulaLinha() {

        document.write("<br>");
    }

    function mostra(frase) {
        document.write(frase);
        pulaLinha();
    }

    function a(numero1, numero2) {
        return numero1 + numero2;
    }

    function b(numero1, numero2) {
        return numero1 / numero2;
    }

    var resultado = a(10,20) + b(30,2);

    mostra(resultado);
</script>