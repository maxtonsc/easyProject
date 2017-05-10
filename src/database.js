import * as Firebase from 'firebase'

let HAS_INITIALIZED = false

const initFirebase = () => {
  if (!HAS_INITIALIZED) {
  const config = {
    apiKey: "AIzaSyCU2cuTuqsjPNOIOKPPLZ1bNOCM-Dqa8HY",
    authDomain: "himp-d010e.firebaseapp.com",
    databaseURL: "https://himp-d010e.firebaseio.com",
    storageBucket: "himp-d010e.appspot.com",
  }
  Firebase.database.enableLogging(true)
  Firebase.initializeApp(config)
  HAS_INITIALIZED= true
  }
}

export const getDatabase = () => {
initFirebase()
return Firebase.database()
}
