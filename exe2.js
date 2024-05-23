
function exe2() {
  let preco = 5.0;
  let qtde = 120;
  const despesa = 200;
  let lucroMaximo = 0;
  let precoMelhor;
  let qtdeMelhor;

  while (preco >= 1.0) {
    const lucro = preco * qtde - despesa;

    if (lucro > lucroMaximo) {
      lucroMaximo = lucro;
      precoMelhor = preco;
      qtdeMelhor = qtde;
    }

    console.log(`Preço: ${preco} - Qtde: ${qtde} - Lucro: ${lucro}`);
    qtde = qtde + 26;
    preco = preco - 0.5;
  }

  console.log(`Lucro máximo esperado: ${lucroMaximo}`);
  console.log(`Preço do ingresso para lucro máximo: ${precoMelhor}`);
  console.log(
    `Quantidade de ingressos vendidos para lucro máximo: ${qtdeMelhor}`
  );
}

exe2();