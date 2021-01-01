export default ({ app, store }, inject) => {
  inject('notifier', {
    showMessage ({ content = '', color = '' }) {
      store.commit('snackbar/SHOW_MESSAGE', { content, color })
    }
  })
}
