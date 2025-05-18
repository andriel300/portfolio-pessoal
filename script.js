// Comentário: Apenas exibe no console quando o formulário é enviado
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita recarregar a página
    alert("Mensagem enviada com sucesso! (simulação)");
  });
});

