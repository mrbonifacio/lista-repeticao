function calcularMaiorMenor() {
    let maiorValor = null;
    let menorValor = null;

    while (true) {
        let valor = parseInt(prompt("Digite um valor inteiro e positivo (ou zero para encerrar):"));

        if (valor === 0) {
            break;
        }

        if (valor < 0) {
            console.log("Valor negativo! Por favor, digite um valor positivo.");
            continue;
        }

        if (maiorValor === null || valor > maiorValor) {
            maiorValor = valor;
        }

        if (menorValor === null || valor < menorValor) {
            menorValor = valor;
        }
    }

    if (maiorValor === null || menorValor === null) {
        console.log("Nenhum valor positivo foi digitado.");
    } else {
        console.log(`O maior valor digitado é: ${maiorValor}`);
        console.log(`O menor valor digitado é: ${menorValor}`);
    }
}

calcularMaiorMenor();
