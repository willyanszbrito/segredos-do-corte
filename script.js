// Redirecionar para a página de agendamento quando o botão "Agendar Agora" for clicado
document.getElementById('agendarBtn').addEventListener('click', function() {
  window.location.href = 'agendamento.html';  // Redireciona para a página de agendamento
});

// Seleção do dia da semana
function selectDay(day) {
  alert('Você selecionou ' + day + '. Agora escolha a data e horário para o agendamento.');
}
