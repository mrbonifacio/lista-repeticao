let idades = [25, 30, 15, 40, 22, 27, 35, 45, 50, 55];
let pesos = [70, 80, 60, 95, 75, 85, 90, 100, 110, 120];
let alturas = [1.7, 1.8, 1.6, 1.95, 1.75, 1.85, 1.9, 1.7, 1.8, 1.9];

let mediaIdades = calcularMediaIdades(idades);
let qtdPessoasPesoAltura = calcularQtdPessoasPesoAltura(pesos, alturas);
let porcentagemIdadeAltura = calcularPorcentagemIdadeAltura(idades, alturas);

console.log("Média das idades das dez pessoas:", mediaIdades.toFixed(2));
console.log(
  "Quantidade de pessoas com peso superior a 90kg e altura inferior a 1,50 metro:",
  qtdPessoasPesoAltura
);
console.log(
  "Porcentagem de pessoas com idade entre 10 e 30 anos entre as pessoas que medem mais de 1,90m:",
  porcentagemIdadeAltura.toFixed(2)
);

function calcularMediaIdades(idades) {
  let somaIdades = 0;
  for (let i = 0; i < idades.length; i++) {
    somaIdades += idades[i];
  }
  return somaIdades / idades.length;
}

function calcularQtdPessoasPesoAltura(pesos, alturas) {
  let qtdPessoas = 0;
  for (let i = 0; i < pesos.length; i++) {
    if (pesos[i] > 90 && alturas[i] < 1.5) {
      qtdPessoas++;
    }
  }
  return qtdPessoas;
}

function calcularPorcentagemIdadeAltura(idades, alturas) {
  let qtdPessoasIdadeAltura = 0;
  let qtdPessoasAltura = 0;
  for (let i = 0; i < idades.length; i++) {
    if (idades[i] >= 10 && idades[i] <= 30 && alturas[i] > 1.9) {
      qtdPessoasIdadeAltura++;
    }
    if (alturas[i] > 1.9) {
      qtdPessoasAltura++;
    }
  }
  return (qtdPessoasIdadeAltura / qtdPessoasAltura) * 100;
}
