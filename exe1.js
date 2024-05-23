function exe1() {
  const grupos = ["A", "B", "C", "D"];
  console.log("Array original:", grupos);

  grupos.sort();
  console.log("Ordenado em ordem crescente:", grupos);

  grupos.sort((a, b) => b.localeCompare(a));
  console.log("Ordenado em ordem decrescente:", grupos);
}

exe1();





