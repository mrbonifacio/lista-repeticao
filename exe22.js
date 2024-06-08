function calcularMediaAlturas() {
  let totalAltura = 0;
  let contagem = 0;

  while (true) {
    let idade = parseInt(
      prompt(
        "Digite a idade (ou uma idade menor ou igual a zero para encerrar):"
      )
    );
    if (idade <= 0) {
      break;
    }

    let altura = parseFloat(prompt("Digite a altura:"));

    if (idade > 50) {
      totalAltura += altura;
      contagem++;
    }
  }

  if (contagem > 0) {
    let mediaAlturas = totalAltura / contagem;
    console.log(
      `A média das alturas das pessoas com mais de 50 anos é: ${mediaAlturas.toFixed(
        2
      )} metros`
    );
  } else {
    console.log("Não há pessoas com mais de 50 anos.");
  }
}

calcularMediaAlturas();
