import jwtDecode from 'jwt-decode'
import cookieParser from 'cookieparser'

export const actions = {
  // this will run on server
  nuxtServerInit ({ commit }, { req }) {
    if (process.server && process.static) { return }
    if (!req.headers.cookie) { return }

    const parsedCookie = cookieParser.parse(req.headers.cookie)
    const accessTokenCookie = parsedCookie.access_token
    if (!accessTokenCookie) { return }

    const decodedToken = jwtDecode(accessTokenCookie)

    if (decodedToken) {
      commit('users/SET_USER', {
        uid: decodedToken.user_id,
        email: decodedToken.email
      })
    }
  }
}
