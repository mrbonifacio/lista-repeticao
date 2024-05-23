function pessoasAcimaDe50Anos(idades) {
    let quantidade = 0;
    for (let i = 0; i < idades.length; i++) {
      if (idades[i] > 50) {
        quantidade++;
      }
    }
    return quantidade;
  }
  
  function mediaAlturas(idades, alturas) {
    let soma = 0;
    let quantidade = 0;
    for (let i = 0; i < idades.length; i++) {
      if (idades[i] >= 10 && idades[i] <= 20) {
        soma += alturas[i];
        quantidade++;
      }
    }
    return soma / quantidade;
  }
  
  function porcentagemPesoInferior40kg(pesos) {
    let quantidade = 0;
    for (let i = 0; i < pesos.length; i++) {
      if (pesos[i] < 40) {
        quantidade++;
      }
    }
    return (quantidade / pesos.length) * 100;
  }
  
  let idades = [45, 12, 18, 60, 25];
  let alturas = [1.75, 1.50, 1.65, 1.55, 1.80];
  let pesos = [55, 40, 45, 35, 60];
  
  console.log("Quantidade de pessoas com idade superior a 50 anos:", pessoasAcimaDe50Anos(idades));
  console.log("Média das alturas das pessoas com idade entre 10 e 20 anos:", mediaAlturas(idades, alturas).toFixed(2));
  console.log("Porcentagem de pessoas com peso inferior a 40kg:", porcentagemPesoInferior40kg(pesos).toFixed(2));