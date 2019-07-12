import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: 'AIzaSyDY756_BzO-1auzj3piidD16vZwPfKcs4c',
    authDomain: 'sprintifysite.firebaseapp.com',
    databaseURL: 'https://sprintifysite.firebaseio.com',
    projectId: 'sprintifysite',
    storageBucket: 'sprintifysite.appspot.com',
    messagingSenderId: '1014644668768',
    appId: '1:1014644668768:web:e65b5b52375e5a70'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
db.settings({ timestampsInSnapshots: true })

export default db
