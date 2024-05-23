function exe10() {
  let somaPrimo = 0;
  let somaPares = 0;
  for (let conta = 1; conta <= 10; conta++) {
    let numero = Number(prompt("informe um número"));
    let primo = true;

    for (let divisor = 2; divisor <= numero - 1; divisor++) {
      if (numero % divisor == 0) {
        primo = false;
      }
    }
    if (primo && numero != 0 && numero != 1) {
      console.log(`O numero ${numero} é primo`);
      somaPrimo = somaPrimo + numero;
    } else {
      console.log(`O numero ${numero} não é primo`);
    }
    if (numero % 2 == 0) {
      console.log(`O numero ${numero} não é par`);
      somaPares = somaPares + numero;
    }
  }
  console.log(`A soma dos primos é ${somaPrimo}`);
  console.log(`A soma dos pares é ${somaPares}`);
}

exe10();
