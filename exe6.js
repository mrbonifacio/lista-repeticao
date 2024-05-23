function totalAVista(transactions) {
  let total = 0;
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i][0] === "V") {
      total += transactions[i][1];
    }
  }
  return total;
}

function totalAPrazo(transactions) {
  let total = 0;
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i][0] === "P") {
      total += transactions[i][1];
    }
  }
  return total;
}

function primeiraParcela(totalPrazo) {
  return totalPrazo / 3;
}

function totalTransactions(transactions) {
  let total = 0;
  for (let i = 0; i < transactions.length; i++) {
    total += transactions[i][1];
  }
  return total;
}

let transactions = [
  ["V", 100],
  ["P", 200],
  ["V", 300],
  ["P", 400],
  ["V", 500],
  ["P", 600],
  ["V", 700],
  ["P", 800],
  ["V", 900],
  ["P", 1000],
  ["V", 1100],
  ["P", 1200],
  ["V", 1300],
  ["P", 1400],
  ["V", 1500],
];

console.log(
  "valor total de compras 'V': R$",
  totalAVista(transactions).toFixed(2)
);
console.log(
  "valor total de compras 'P': R$",
  totalAPrazo(transactions).toFixed(2)
);
console.log(
  "valor total de todas: R$",
  totalTransactions(transactions).toFixed(2)
);
console.log(
  "valor da primeira parcela 'P': R$",
  primeiraParcela(totalAPrazo(transactions)).toFixed(2)
);
