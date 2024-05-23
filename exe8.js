function pessoasComIdadeEPesoEspecificos(idades, pesos) {
    let quantidade = 0;
    for (let i = 0; i < idades.length; i++) {
      if (idades[i] > 50 && pesos[i] < 60) {
        quantidade++;
      }
    }
    return quantidade;
  }
  
  function mediaIdadesPessoasComAlturaInferior(idades, alturas) {
    let soma = 0;
    let quantidade = 0;
    for (let i = 0; i < idades.length; i++) {
      if (alturas[i] < 1.50) {
        soma += idades[i];
        quantidade++;
      }
    }
    return soma / quantidade;
  }
  
  function porcentagemPessoasComOlhosAzuis(coresOlhos) {
    let quantidade = 0;
    for (let i = 0; i < coresOlhos.length; i++) {
      if (coresOlhos[i] === 'azul') {
        quantidade++;
      }
    }
    return (quantidade / coresOlhos.length) * 100;
  }
  
  function quantidadePessoasRuivasSemOlhosAzuis(coresCabelos, coresOlhos) {
    let quantidade = 0;
    for (let i = 0; i < coresCabelos.length; i++) {
      if (coresCabelos[i] === 'ruivo' && coresOlhos[i] !== 'azul') {
        quantidade++;
      }
    }
    return quantidade;
  }
  
  let idades = [55, 45, 12, 60, 25, 52];
  let pesos = [65, 70, 40, 55, 80, 75];
  let alturas = [1.75, 1.65, 1.50, 1.80, 1.60, 1.55];
  let coresOlhos = ['azul', 'marrom', 'verde', 'azul', 'castanho', 'verde'];
  let coresCabelos = ['castanho', 'ruivo', 'loiro', 'preto', 'ruivo', 'loiro'];
  
  console.log("Quantidade de pessoas com idade superior a 50 anos e peso inferior a 60kg:", pessoasComIdadeEPesoEspecificos(idades, pesos));
console.log("Média das idades das pessoas com altura inferior a 1,50m:", mediaIdadesPessoasComAlturaInferior(idades, alturas).toFixed(2));
console.log("Porcentagem de pessoas com olhos azuis:", porcentagemPessoasComOlhosAzuis(coresOlhos).toFixed(2));
console.log("Quantidade de pessoas ruivas sem olhos azuis:", quantidadePessoasRuivasSemOlhosAzuis(coresCabelos, coresOlhos));