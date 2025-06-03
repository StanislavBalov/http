export default {
  build: {
    rollupOptions: {
      external: ['bundle.js'], // Добавляем bundle.js в список внешних модулей
    },
  },
};