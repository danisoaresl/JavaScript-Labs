// O que Kellen fez foi concatenar o texto "O meu IMC é " com uma função que calcula o imc, a function calculaImc(). 
// É importante entender que a concatenação não é feita com a função, mas sim com seu retorno, a instrução return. Por exemplo, se a função retornar 25, será esse o valor concatenado com o texto. Isto é, uma sintaxe completamente válida. Continue com os estudos!

<meta charset="UTF-8">

<script>
  function pulaLinha() {
    document.write("<br>");
  }

  function mostra(frase) {
    document.write(frase);
  }

  function calculaImc(altura, peso) {
    return peso / (altura * altura);
  }
  mostra("O meu IMC é " + calculaImc(1.63, 48));
</script>