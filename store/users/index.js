import Cookie from 'js-cookie'
// import { auth } from '~/plugins/firebase.conf'

export const state = () => ({
  user: null
})

export const mutations = {
  SET_USER (state, account) {
    state.user = account
  },
  REMOVE_USER (state) {
    state.user = null
  }
}

export const actions = {
  async login ({ commit }, account) {
    await this.$auth.signInWithEmailAndPassword(account.email, account.password)
    const token = await this.$auth.currentUser.getIdToken()
    const { email, uid } = this.$auth.currentUser

    Cookie.set('access_token', token)

    commit('SET_USER', { email, uid })
  },
  async logout ({ commit }, account) {
    await this.$auth.signOut()

    Cookie.remove('access_token')

    commit('REMOVE_USER')
  },
  async create ({ commit }, account) {
    await this.$auth.createUserWithEmailAndPassword(account.email, account.password)
  },
  async updateEmail ({ commit }, account) {
    await this.$auth.currentUser.updateEmail(account.email)
    commit('SET_USER', account)
  },
  passwordChangeRequest (context, userEmail) {
    this.$auth.sendPasswordResetEmail(userEmail)
  }
}

export const getters = {
  isUserLoggedIn (state) {
    return !!state.user
  },
  loggedUserEmail (state) {
    return state.user ? state.user.email : ''
  }
}
