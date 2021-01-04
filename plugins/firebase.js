import firebase from 'firebase/app'
import 'firebase/auth'

export default ({ app, store }, inject) => {
  if (process.server) {
    store.commit('SET_ENV', {
      IS_PRODUCTION: process.env.NODE_ENV === 'production' || false,
      FB_API_KEY: process.env.FB_API_KEY,
      FB_AUTH_DOMAIN: process.env.FB_AUTH_DOMAIN,
      FB_PROJECT_ID: process.env.FB_PROJECT_ID,
      FB_STORAGE_BUCKET: process.env.FB_STORAGE_BUCKET,
      FB_MESSAGING_SENDER_ID: process.env.FB_MESSAGING_SENDER_ID,
      FB_APP_ID: process.env.FB_APP_ID,
      FB_MEASUREMENT_ID: process.env.FB_MEASUREMENT_ID,
      ROOT_USER_EMAIL: process.env.ROOT_USER_EMAIL
    })
  }

  const firebaseConfig = {
    apiKey: store.state.env.FB_API_KEY,
    authDomain: store.state.env.FB_AUTH_DOMAIN,
    projectId: store.state.env.FB_PROJECT_ID,
    storageBucket: store.state.env.FB_STORAGE_BUCKET,
    messagingSenderId: store.state.env.FB_MESSAGING_SENDER_ID,
    appId: store.state.env.FB_APP_ID,
    measurementId: store.state.env.FB_MEASUREMENT_ID
  }
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
    // firebase.analytics()
  }
  inject('auth', firebase.auth())
}
