const cnpjInput = document.getElementById("cnpj");
const passwordInput = document.getElementById("password");
const showPasswordCheckbox = document.getElementById("show-password");

cnpjInput.addEventListener("input", (event) => {
  const value = event.target.value.replace(/\D/g, "");
  if (value.length <= 2) {
    event.target.value = value;
    return;
  }
  if (value.length <= 5) {
    event.target.value = `${value.slice(0, 2)}.${value.slice(2)}`;
    return;
  }
  if (value.length <= 8) {
    event.target.value = `${value.slice(0, 2)}.${value.slice(2, 5)}.${value.slice(5)}`;
    return;
  }
  if (value.length <= 12) {
    event.target.value = `${value.slice(0, 2)}.${value.slice(2, 5)}.${value.slice(5, 8)}/${value.slice(8)}`;
    return;
  }
  event.target.value = `${value.slice(0, 2)}.${value.slice(2, 5)}.${value.slice(5, 8)}/${value.slice(8, 12)}-${value.slice(12, 14)}`;
});

showPasswordCheckbox.addEventListener("change", () => {
  if (showPasswordCheckbox.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});