import { createTicketElement } from './ticket';

describe('createTicketElement', () => {
  test('создаёт DOM-элемент с нужным классом и текстом', () => {
    const ticket = { id: '123', name: 'Сломался принтер', status: false };
    const el = createTicketElement(ticket);

    expect(el).toBeInstanceOf(HTMLElement);
    expect(el.classList.contains('ticket')).toBe(true);
    expect(el.dataset.id).toBe('123');
    expect(el.textContent).toContain('Сломался принтер');
    expect(el.textContent).toContain('🕒');
  });
});
