
import { initializeApp } from "firebase/app";
 import {getFirestore} from "@firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyC3RXFk2C_iFsm30pQq4oB234is-3-MHGg",
    authDomain: "contact-form-a1e06.firebaseapp.com",
    databaseURL: "https://contact-form-a1e06-default-rtdb.firebaseio.com",
    projectId: "contact-form-a1e06",
    storageBucket: "contact-form-a1e06.appspot.com",
    messagingSenderId: "351765406777",
    appId: "1:351765406777:web:e30a44b6cdc1f46b4259e8"
  };
  
  const app = initializeApp(firebaseConfig);
  const firestore=getFirestore(app);
  export default firestore;