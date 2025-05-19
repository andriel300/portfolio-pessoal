// Comentário: Apenas exibe no console quando o formulário é enviado
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const loading = document.getElementById("loading");
  const btn = document.getElementById("submit-btn");

  if (form) {
    form.addEventListener("submit", () => {
      btn.disabled = true;
      loading.classList.remove("hidden");
    });
  }
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
});

