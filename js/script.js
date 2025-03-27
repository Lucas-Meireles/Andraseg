const mobileMenuToggle = document.getElementById("mobile-menu");
const navList = document.getElementById("nav-list");

mobileMenuToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
});


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

  alert("Mensagem enviada com sucesso!");
  return true;
}



const linksInternos = document.querySelectorAll('a[href^="#"]');

function scrollToTarget(event) {
    event.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
        const offset = target.offsetTop;
        window.scrollTo({
            top: offset,
            behavior: "smooth" // Scroll suave
        });
    }
}


document.addEventListener("DOMContentLoaded", function () {
  const banner = document.querySelector(".cookie-banner");
  const acceptBtn = document.querySelector(".accept");
  const rejectBtn = document.querySelector(".reject");

  // Verifica se o consentimento já foi dado
  if (localStorage.getItem("cookie-consent")) {
      banner.style.display = "none";
      return;
  }

  // Função para salvar a escolha e ocultar o banner
  function hideBanner(consent) {
      localStorage.setItem("cookie-consent", consent);
      banner.style.display = "none";
  }

  // Event listeners
  acceptBtn.addEventListener("click", () => hideBanner("accepted"));
  rejectBtn.addEventListener("click", () => hideBanner("rejected"));
});
