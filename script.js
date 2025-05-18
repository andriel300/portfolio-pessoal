// Comentário: Apenas exibe no console quando o formulário é enviado
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita recarregar a página
    alert("Mensagem enviada com sucesso!");
  });
});


// Alternar tema claro/escuro com persistência no localStorage
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-theme");

  // Ativar tema salvo
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }

  // Alternar ao clicar
  toggleBtn?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // Simula envio do formulário com alerta (contato.html)
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Mensagem enviada com sucesso! (simulação)");
    });
  }
});

