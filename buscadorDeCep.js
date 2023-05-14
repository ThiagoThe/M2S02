async function buscadorDeCep(cep) {
  try {
    await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        dados;
      });
  } catch (error) {
    console.log("Cep Invalido", error);
  }
}

module.exports = buscadorDeCep;
