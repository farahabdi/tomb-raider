import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyD4N3zA3glGtQJqg9PjVZWTwPrjTO1foAI",
    authDomain: "tomb-raider-app.firebaseapp.com",
    databaseURL: "https://tomb-raider-app.firebaseio.com",
    projectId: "tomb-raider-app",
    storageBucket: "tomb-raider-app.appspot.com",
    messagingSenderId: "838699858126"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth()
export const firebaseDb = firebase.database();

