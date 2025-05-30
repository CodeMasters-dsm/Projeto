document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");
  
    if (user === "joao@teste.com" && pass === "1234") {
      errorMsg.textContent = "";
      alert("Login bem-sucedido!");
    } else {
      errorMsg.textContent = "Usuário ou senha incorretos.";
    }
  });
  