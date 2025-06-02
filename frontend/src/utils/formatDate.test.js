const { formatDate } = require('./formatDate');

test('форматирует timestamp в строку даты', () => {
  const date = new Date('2023-05-01T12:00:00Z');
  const timestamp = date.getTime();
  expect(formatDate(timestamp)).toMatch(/\d{2}\.\d{2}\.\d{4}/);
});
