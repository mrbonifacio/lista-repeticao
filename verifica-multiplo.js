function verificaMultiplos(arrayNumeros) {
  return arrayNumeros.map((numero) => {
    if (numero % 2 === 0 && numero % 3 === 0) {
      return `O número ${numero} é múltiplo de 2 e de 3.`;
    } else if (numero % 2 === 0) {
      return `O número ${numero} é múltiplo de 2.`;
    } else if (numero % 3 === 0) {
      return `O número ${numero} é múltiplo de 3.`;
    } else {
      return `O número ${numero} não é múltiplo de 2 nem de 3.`;
    }
  });
}

// Exemplo de uso
const numeros = [4, 6, 9, 10, 12, 15];
const resultados = verificaMultiplos(numeros);
console.log(resultados);
    