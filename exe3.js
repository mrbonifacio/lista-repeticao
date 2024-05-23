function exe3(idades) {
    const faixasEtarias = [0, 0, 0, 0]; // Índices representam as faixas etárias: 0-15, 16-30, 31-45, 46-60, 60+
    const totalPessoas = idades.length;
  
    // Contar pessoas em cada faixa etária
    idades.forEach(idade => {
        if (idade <= 15) {
            faixasEtarias[0]++;
        } else if (idade <= 30) {
            faixasEtarias[1]++;
        } else if (idade <= 45) {
            faixasEtarias[2]++;
        } else if (idade <= 60) {
            faixasEtarias[3]++;
        } else {
            faixasEtarias[4]++;
        }
    });
  
    const porcentagemPrimeiraFaixa = (faixasEtarias[0] / totalPessoas) * 100;
    const porcentagemUltimaFaixa = (faixasEtarias[4] / totalPessoas) * 100;
  
    console.log("Quantidade de pessoas em cada faixa etária:");
    console.log(`0-15 anos: ${faixasEtarias[0]} pessoas`);
    console.log(`31-45 anos: ${faixasEtarias[1]} pessoas`);
    console.log(`46-60 anos: ${faixasEtarias[3]} pessoas`);
    console.log(`60+ anos: ${faixasEtarias[4]} pessoas`);
  
    console.log(`\nPorcentagem de pessoas na primeira faixa etária: ${porcentagemPrimeiraFaixa.toFixed(2)}%`);
    console.log(`Porcentagem de pessoas na última faixa etária: ${porcentagemUltimaFaixa.toFixed(2)}%`);
  }
  
  const idades = [15, 25, 40, 55, 10, 30, 48, 70];
  exe3(idades);