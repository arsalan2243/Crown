import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const config = {
  apiKey: "AIzaSyC17jVQNt8mSEaXpc32XbzZQF7m0j4Q3LI",
  authDomain: "crown-market-be260.firebaseapp.com",
  projectId: "crown-market-be260",
  storageBucket: "crown-market-be260.appspot.com",
  messagingSenderId: "647125537022",
  appId: "1:647125537022:web:7f27ccd925fecc9f12d5af",
  measurementId: "G-PPY70KCCR1",
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userReft = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userReft.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userReft.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log("error creating user", error.message)
    }
  }
  return userReft
}
firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
