// Helena teve a ideia de criar a função somaDoisNumeros. Esta função precisa receber dois parâmetros e imprimir como resultado a soma desses dois números.

// Qual das opções declara e chama corretamente esta função?

// O importante aqui é entender que se a função esta preparada para receber dois parâmetros, 
// na hora que ela for chamada precisamos passar dois parâmetros. É claro, como já vimos, na declaração da função, podemos escolher qualquer nome para os parâmetros, mas precisamos usar esses nomes no bloco da função.

<meta charset="UTF-8">

<script>

    function pulaLinha() {
        document.write("<br>");
    }

    function mostra(frase) {
        document.write(frase);
        pulaLinha();
    }

    function somaDoisNumeros(numero1, numero2) {
        mostra("A soma dos dois números é : " + (numero1 + numero2) );
    }

    somaDoisNumeros(10, 40);
</script>

