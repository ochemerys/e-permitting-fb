import { auth } from '@/services/firebase.conf'
import Cookie from 'js-cookie'

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
    await auth.signInWithEmailAndPassword(account.email, account.password)
    const token = await auth.currentUser.getIdToken()
    const { email, uid } = auth.currentUser

    Cookie.set('access_token', token)

    commit('SET_USER', { email, uid })
  },
  async logout ({ commit }, account) {
    await auth.signOut()

    Cookie.remove('access_token')

    commit('REMOVE_USER')
  },
  async create ({ commit }, account) {
    await auth.createUserWithEmailAndPassword(account.email, account.password)
  },
  passwordChangeRequest (context, userEmail) {
    auth.sendPasswordResetEmail(userEmail)
  }
}

export const getters = {
  isUserLoggedIn (state) {
    return !!state.user
  },
  isUserAdmin (state) {
    // TODO implement roles
    return !!state.user && state.user.email === 'root@e-permitting.fb.com'
  },
  loggedUserName (state) {
    return state.user ? state.user.email : ''
  }
}
