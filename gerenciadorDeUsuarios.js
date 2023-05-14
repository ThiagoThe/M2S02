const fs = require("fs");

let usuarios = [];
if (fs.existsSync("usuarios.json")) {
  let dados = fs.readFileSync("usuarios.json");
  usuarios = JSON.parse(dados);
}

function salvarUsuarios() {
  const dados = JSON.stringify(usuarios, null, 2);
  fs.writeFileSync("usuarios.json", dados, "utf8");
}

function cadastrarUsuario(usuario) {
  const emailJaCadastrado = usuarios.find((u) => u.email === usuario.email);
  if (emailJaCadastrado) {
    return { sucesso: false, mensagem: "Email já cadastrado" };
  }
  usuarios.push(usuario);
  salvarUsuarios();
  return { sucesso: true, mensagem: "Usuário cadastrado com sucesso" };
}

function fazerLogin(email, senha) {
  const usuario = usuarios.find((u) => u.email === email && u.senha === senha);
  if (usuario) {
    return { sucesso: true, mensagem: "Usuário logado com sucesso" };
  } else {
    return { sucesso: false, mensagem: "Email e/ou senha inválidos" };
  }
}

function excluirUsuario(email, senha) {
  const usuarioIndex = usuarios.findIndex(
    (u) => u.email === email && u.senha === senha
  );
  if (usuarioIndex >= 0) {
    usuarios.splice(usuarioIndex, 1);
    salvarUsuarios();
    return { sucesso: true, mensagem: "Usuário excluído com sucesso" };
  } else {
    return { sucesso: false, mensagem: "Email e/ou senha inválidos" };
  }
}

module.exports = { cadastrarUsuario, fazerLogin, excluirUsuario };
