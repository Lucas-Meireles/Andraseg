function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var tel = document.getElementById("tel").value;
  var message = document.getElementById("message").value;

  if (name == "") {
    document.getElementById("name-error").innerHTML = "Por favor, insira seu nome";
    return false;
  }
  if (email == "") {
    document.getElementById("email-error").innerHTML = "Por favor, insira um email válido";
    return false;
  }
  if (tel == "") {
    document.getElementById("tel-error").innerHTML = "Por favor, insira um número de telefone";
    return false;
  }
  if (message == "") {
    document.getElementById("message-error").innerHTML = "Por favor, envie uma mensagem";
    return false;
  }
  // Enviar o formulário se todos os campos foram preenchidos
  alert("Mensagem enviada com sucesso!");
  return true;
}
