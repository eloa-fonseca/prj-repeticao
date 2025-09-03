function contagemFor() {
    let numero, contador, mensagem = "CONTAGEM DO FOR\n";

    numero = parseInt(prompt("Contagem até 500, digite um número menor que 500 e eu direi o que é par ou impar:"));

    for (contador = numero; contador <= 500; contador++) { // "contador++" ele mesmo mais 1


        if (contador % 2 === 0) {
            mensagem = mensagem + contador + " - PAR \n";
        } else {
            mensagem = mensagem + contador + " - ÍMPAR \n";
        }

    }

    alert(mensagem);

}

function contagemWhile() {

    let numero, contador, mensagem = " CONTAGEM DO WHILE\n";

    numero = parseInt(prompt("Contagem até 500, digite um número menor que 500 e eu direi o que é par ou impar:"));

    contador = numero;

    while (contador <= 500) {

        if (contador % 2 === 0) {
            mensagem = mensagem + contador + " - PAR \n";

        } else {
            mensagem = mensagem + contador + " - ÍMPAR \n";
        }

        contador = contador + 1
    }


    alert(mensagem);


}


function contagemDo() {

    let numero, contador, mensagem = "CONTAGEM do DO\n";

    numero = parseInt(prompt("Contagem até 500, digite um número menor que 500 e eu direi o que é par ou impar:"));

    contador = numero;

    do {

        if (contador % 2 === 0) {
            mensagem = mensagem + contador + " - PAR \n";

        } else {
            mensagem = mensagem + contador + " - ÍMPAR \n";
        }

        contador = contador + 1;

    } while (contador <= 500);

    alert(mensagem);
}


function tabuada() {

    let numero, contador, resposta, mensagem = "";

    numero = parseInt(prompt("insira um número"));

    for (contador = 1; contador <= 10; contador++) {
        resposta = contador * numero;
        mensagem += numero + "x" + contador + "=" + resposta + "\n";
    }
    alert(mensagem);




}


function inicioFim() {

    let numero1, numero2, contador, mensagem="Contagem\n";

    numero1 = parseInt(prompt("Digite um número"));
    numero2 = parseInt(prompt("Digite outro número"))

    while (numero1 >= numero2) {

        numero2 = parseInt(prompt("O primeiro número tem que ser menor que o segundo, digite o segundo número novamente"));
    }


    for (contador = numero1; contador <= numero2; contador++) {

        if (contador == numero1) {
            mensagem+= numero1 + "=" + "INICIO\n";

        }
        else if (contador== numero2){
            mensagem+= numero2 + "=" + "FIM\n";

        }
       else{
        mensagem+= contador + "\n";
       }

    }

    alert(mensagem);
}





