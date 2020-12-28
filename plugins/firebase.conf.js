import * as firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCeNv04FY6rKJ8SSjqlyp5uuQkjmTGFT1c',
  authDomain: 'e-permitting-fb.firebaseapp.com',
  projectId: 'e-permitting-fb',
  storageBucket: 'e-permitting-fb.appspot.com',
  messagingSenderId: '109697209608',
  appId: '1:109697209608:web:fa20a4b6de57aa9d3d48bd',
  measurementId: 'G-25MZZ3CMB2'
}
// Initialize Firebase
// eslint-disable-next-line import/no-mutable-exports

if (firebase.app.length) {
  firebase.initializeApp(firebaseConfig)
  firebase.analytics()
}

export default firebase
