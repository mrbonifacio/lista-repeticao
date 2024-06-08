function exe20() {
  let opcao, n1, n2, n3, p1, p2, p3;
  do {
    opcao = Number(
      prompt(
        `Menu de opçoes \n I. Media Aritmetica \n II. Media Ponderada \n III. Sair `
      )
    );
    switch (opcao) {
      case 1:
        do {
          n1 = Number(prompt(`informe uma nota`));
        } while (n1 < 0 && n1 > 10);
        do {
          n2 = Number(prompt(`informe uma nota`));
        } while (n2 < 0 && n2 > 10);
        alert(`texto ai media do bgl e essa ${n1 + n2 / 2}`);
        break;
      case 2:
        n1 = Number(prompt(`informe o n1`));
        n2 = Number(prompt(`informe o n2`));
        n3 = Number(prompt(`informe o n3`));
        p1 = Number(prompt(`informe o p1`));
        p2 = Number(prompt(`informe o p2`));
        p3 = Number(prompt(`informe o p3`));
        let mp = (n1 * p1 + n2 * p2 + n3 * p3) / (n1 * p1 + n2 * p2 + n3 * p3);
        alert(`Média ponderada ${mp}`);
        break;
      case 3 || 0:
        alert(`Programa sera encerrado`);
        break;
      default:
        alert(`opção invalida`);
    }
  } while (opcao !== 3);
}
