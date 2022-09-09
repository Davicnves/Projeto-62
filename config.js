 import * as firebase from "firebase";
 
  const firebaseConfig = {
  apiKey: "AIzaSyCs_zSsM1Uv768Vz4Q26LDPU5C_zPUEFJo",
  authDomain: "school-attendance-f2e35.firebaseapp.com",
  databaseURL: "https://school-attendance-f2e35-default-rtdb.firebaseio.com",
  projectId: "school-attendance-f2e35",
  storageBucket: "school-attendance-f2e35.appspot.com",
  messagingSenderId: "461259348443",
  appId: "1:461259348443:web:523f893e9ffd2f2498effe"
};
const app = initializeApp(firebaseConfig);

  export default firebase.database()
 

  