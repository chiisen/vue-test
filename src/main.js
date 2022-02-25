import { createApp } from "vue";
import App from "./App.vue";

//
// For Firebase JS SDK --- Start
//
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVQWS8hh5ZQZNtogmHoa3DLB1yw_RM1DU",
  authDomain: "fir-test-7e0d4.firebaseapp.com",
  projectId: "fir-test-7e0d4",
  storageBucket: "fir-test-7e0d4.appspot.com",
  messagingSenderId: "745119052269",
  appId: "1:745119052269:web:ec189dfa6eda001aa6f7e4",
  measurementId: "G-WVJPW2Z86B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//
// For Firebase JS SDK --- End
//

createApp(App).mount("#app");
