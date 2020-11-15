import firebase from 'firebase';
import { configFirebase } from './Types/Types';

const config: configFirebase = {
    apiKey: "AIzaSyDE6yjF0m9_mEZnU6m5DxZ385vtpgh2Df0",
    authDomain: "expense-tracker-pwa-de693.firebaseapp.com",
    databaseURL: "https://expense-tracker-pwa-de693.firebaseio.com",
    projectId: "expense-tracker-pwa-de693",
    storageBucket: "expense-tracker-pwa-de693.appspot.com",
    messagingSenderId: "134245220414",
    appId: "1:134245220414:web:e160d9be620523ca52516f"
};
firebase.initializeApp(config);

export default firebase;