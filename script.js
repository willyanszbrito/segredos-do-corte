// Redirecionar para a página de agendamento quando o botão "Agendar Agora" for clicado
document.getElementById('agendarBtn')?.addEventListener('click', function () {
  window.location.href = 'agendamento.html';
});

// Seleção do dia da semana
function selectDay(day) {
  alert('Você selecionou ' + day + '. Agora escolha a data e horário para o agendamento.');
}

// Envio do formulário para Google Sheets
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-agendamento");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch("http://localhost:3000/agendar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: formData.get("data"),
          hora: formData.get("hora"),
          servico: formData.get("servico")
        }),
      })
      