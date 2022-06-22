import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const config = {
  apiKey: "AIzaSyBCTzBK7RJuENf8sItHSf4Pgzxq38wmpcQ",
  authDomain: "crown-market-eca52.firebaseapp.com",
  projectId: "crown-market-eca52",
  storageBucket: "crown-market-eca52.appspot.com",
  messagingSenderId: "888551442614",
  appId: "1:888551442614:web:87f1fcb390ac8978a3fe17",
  measurementId: "G-LSS0R113CC",
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
