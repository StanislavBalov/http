function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString('ru-RU');
}

module.exports = { formatDate };
