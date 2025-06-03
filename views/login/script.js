document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");
  errorMsg.textContent = "";

  window.location.assign('../adm/index.html');

  if (user === "joao@teste.com" && pass === "1234") {
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "Usuário ou senha incorretos.";
  }
});
