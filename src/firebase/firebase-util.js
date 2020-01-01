import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAdfbb6zsRmMwOsGPLSA1aoRST91Vm2PC8",
  authDomain: "crwn-db-8477f.firebaseapp.com",
  databaseURL: "https://crwn-db-8477f.firebaseio.com",
  projectId: "crwn-db-8477f",
  storageBucket: "crwn-db-8477f.appspot.com",
  messagingSenderId: "848497940982",
  appId: "1:848497940982:web:fb88bc51c35cd1b9468fd7"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ propt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase