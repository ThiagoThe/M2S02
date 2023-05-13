function separadorDeNumeros(arrayDeNumeros, opcao) {
  if (opcao === 1) {
    return arrayDeNumeros.filter((numero) => numero % 2 !== 0);
  } else if (opcao === 2) {
    return arrayDeNumeros.filter((numero) => numero % 2 === 0);
  } else if (opcao === 3) {
    return arrayDeNumeros.reduce(
      (resultado, numero) => {
        if (numero % 2 === 0) {
          resultado.pares.push(numero);
        } else {
          resultado.impares.push(numero);
        }
        return resultado;
      },
      { pares: [], impares: [] }
    );
  } else {
    return "Opção inválida";
  }
}

module.exports = separadorDeNumeros;
