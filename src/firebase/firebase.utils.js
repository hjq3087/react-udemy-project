import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA2qwoAEYE3QMONC8G0A__NWmKECMzGzMU",
    authDomain: "my-react-demo-1d0b4.firebaseapp.com",
    databaseURL: "https://my-react-demo-1d0b4.firebaseio.com",
    projectId: "my-react-demo-1d0b4",
    storageBucket: "",
    messagingSenderId: "286983467185",
    appId: "1:286983467185:web:f12daf770ab472bd",
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const {displayName, email} = userAuth
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log('error creating user', e.message)
        }
    }

    return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
