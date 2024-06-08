function menu() {
    let opcao;

    do {
        opcao = parseInt(prompt(`Menu de Opções:
        1. Novo Salário
        2. Férias
        3. Décimo Terceiro
        4. Sair
        Digite a opção desejada:`));

        switch(opcao) {
            case 1:
                novoSalario();
                break;
            case 2:
                calcularFerias();
                break;
            case 3:
                calcularDecimoTerceiro();
                break;
            case 4:
                console.log("Saindo do programa...");
                break;
            default:
                console.log("Opção inválida! Por favor, escolha uma opção válida.");
        }
    } while (opcao !== 4);
}

function novoSalario() {
    let salario = parseFloat(prompt("Digite o salário do funcionário:"));
    let novoSalario;

    if (salario <= 210) {
        novoSalario = salario * 1.15;
    } else if (salario > 210 && salario <= 600) {
        novoSalario = salario * 1.10;
    } else {
        novoSalario = salario * 1.05;
    }

    console.log(`O novo salário do funcionário é: R$ ${novoSalario.toFixed(2)}`);
}

function calcularFerias() {
    let salario = parseFloat(prompt("Digite o salário do funcionário:"));
    let valorFerias = salario + (salario / 3);

    console.log(`O valor das férias do funcionário é: R$ ${valorFerias.toFixed(2)}`);
}

function calcularDecimoTerceiro() {
    let salario = parseFloat(prompt("Digite o salário do funcionário:"));
    let mesesTrabalhados = parseInt(prompt("Digite o número de meses trabalhados na empresa (máximo 12):"));

    if (mesesTrabalhados < 0 || mesesTrabalhados > 12) {
        console.log("Número de meses inválido. Deve ser entre 0 e 12.");
    } else {
        let valorDecimoTerceiro = (salario * mesesTrabalhados) / 12;
        console.log(`O valor do décimo terceiro do funcionário é: R$ ${valorDecimoTerceiro.toFixed(2)}`);
    }
}

menu();
