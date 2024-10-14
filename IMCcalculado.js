// Parabéns! o valor de uma variável pode ser retornado por uma função. O problema é que a função por padrão não retorna, então, 
// precisamos explicitar seu retorno através da instrução return. Sendo assim, para que a variável imcCalculado receba o resultado da função calculaImc, precisamos adicionar a cláusula return dentro do bloco da função calculaImc. O que estiver à direita da cláusula return será o valor retornado pela função.


<meta charset="UTF-8">
<script>
    function pulaLinha() {
        document.write("<br>");
    }

    function mostra(frase) {
        document.write(frase);
        pulaLinha();
    }

    function calculaImc(altura, peso) {

        var imc = peso / (altura * altura);
        return imc;
    }

    var imcCalculado = calculaImc(1.77, 75);
    mostra("O meu IMC é : " + imcCalculado);
</script>