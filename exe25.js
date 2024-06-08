function calcularRendimento() {
  let totalInvestido = 0;
  let totalJurosPago = 0;

  while (true) {
    let codigoCliente = parseInt(
      prompt(
        "Digite o código do cliente (ou um valor menor ou igual a 0 para encerrar):"
      )
    );

    if (codigoCliente <= 0) {
      break;
    }

    let tipoInvestimento = parseInt(
      prompt(
        "Digite o tipo de investimento (1 para Poupança, 2 para Poupança Plus, 3 para Fundos de Renda Fixa):"
      )
    );
    let valorInvestido = parseFloat(prompt("Digite o valor investido:"));

    if (valorInvestido <= 0) {
      console.log("Valor investido deve ser maior que zero.");
      continue;
    }

    let rendimentoMensal;

    switch (tipoInvestimento) {
      case 1:
        rendimentoMensal = valorInvestido * 0.015;
        break;
      case 2:
        rendimentoMensal = valorInvestido * 0.02;
        break;
      case 3:
        rendimentoMensal = valorInvestido * 0.04;
        break;
      default:
        console.log(
          "Tipo de investimento inválido! Por favor, escolha uma opção válida."
        );
        continue;
    }

    console.log(`Cliente ${codigoCliente}:`);
    console.log(`Tipo de Investimento: ${tipoInvestimento}`);
    console.log(`Valor Investido: R$ ${valorInvestido.toFixed(2)}`);
    console.log(`Rendimento Mensal: R$ ${rendimentoMensal.toFixed(2)}`);

    totalInvestido += valorInvestido;
    totalJurosPago += rendimentoMensal;
  }

  console.log(`Total Investido: R$ ${totalInvestido.toFixed(2)}`);
  console.log(`Total de Juros Pago: R$ ${totalJurosPago.toFixed(2)}`);
}

calcularRendimento();
