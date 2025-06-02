const API_URL = 'http://localhost:7070';

async function loadTickets() {
  const res = await fetch(`${API_URL}/tickets`);
  const data = await res.json();
  const container = document.getElementById('tickets');
  container.innerHTML = '';
  data.forEach(ticket => {
    const div = document.createElement('div');
    div.className = 'ticket';
    div.textContent = ticket.name;
    container.appendChild(div);
  });
}

document.getElementById('app').textContent = 'HelpDesk загружен';
document.getElementById('new-ticket').onclick = async () => {
  const name = prompt('Название заявки:');
  const description = prompt('Описание заявки:');
  if (name) {
    await fetch(`${API_URL}/tickets`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description })
    });
    loadTickets();
  }
};

loadTickets();

console.log('Приложение запущено');
