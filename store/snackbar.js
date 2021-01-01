export const state = () => ({
  content: '',
  color: ''
})

export const mutations = {
  SHOW_MESSAGE (state, payload) {
    state.content = payload.content
    state.color = payload.color
  }
}
