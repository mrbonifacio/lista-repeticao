function calcularVotos(votos) {
  let totalVotos = 0;
  let votos1 = 0;
  let votos2 = 0;
  let votos3 = 0;
  let votos4 = 0;
  let votosNulo = 0;
  let votosBranco = 0;

  for (let voto of votos) {
    if (voto === 0) {
      break;
    }
    switch (voto) {
      case 1:
        votos1++;
        break;
      case 2:
        votos2++;
        break;
      case 3:
        votos3++;
        break;
      case 4:
        votos4++;
        break;
      case 5:
        votosNulo++;
        break;
      case 6:
        votosBranco++;
        break;
      default:
        console.log(`Código inválido: ${voto}`);
    }

    totalVotos++;
  }

  let porcentagemNulos = (votosNulo / totalVotos) * 100;
  let porcentagemBranco = (votosBranco / totalVotos) * 100;

  console.log(`Total de votos para o Candidato 1: ${votos1}`);
  console.log(`Total de votos para o Candidato 2: ${votos2}`);
  console.log(`Total de votos para o Candidato 3: ${votos3}`);
  console.log(`Total de votos para o Candidato 4: ${votos4}`);
  console.log(`Total de votos nulos: ${votosNulo}`);
  console.log(`Total de votos em branco: ${votosBranco}`);
  console.log(`Porcentagem de votos nulos: ${porcentagemNulos.toFixed(2)}%`);
  console.log(
    `Porcentagem de votos em branco: ${porcentagemBranco.toFixed(2)}%`
  );
}

const votos = [1, 2, 3, 3, 1, 8, 9, 1, 2, 0, 4]; // Lista de votos de exemplo
calcularVotos(votos);
