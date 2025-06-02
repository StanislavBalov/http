function createTicketElement({ id, name, status }) {
  const el = document.createElement('div');
  el.classList.add('ticket');
  el.dataset.id = id;
  el.textContent = `${status ? '✅' : '🕒'} ${name}`;
  return el;
}

module.exports = { createTicketElement };