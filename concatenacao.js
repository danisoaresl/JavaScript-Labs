"A" + "B" + 20 + 10 + "C" + (5 + 10) + "D"

//Lembre-se que o que estiver entre parênteses será processado primeiro, sendo assim temos:

"A" + "B" + 20 + 10 + "C" + 15 + "D"

//gora ocorre o processo de concatenação que vai da esquerda para a direita resultando em AB2010C15D.

//Vejamos passo a passo o que acontece com as concatenações de "A" + "B" + 20 + 10 + "C" + (5 + 10) + "D":

"AB" + 20 + 10 + "C" + 15 + "D"
"AB20" + 10 + "C" + 15 + "D"
"AB2010" + "C" + 15 + "D"
"AB2010C" + 15 + "D"
"AB2010C15" + "D"
"AB2010C15D"