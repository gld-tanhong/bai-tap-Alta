import { initializeApp, } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: 'AIzaSyDjHzYU60OO02kplWY9cOFFeySFCjI6mwk',
    authDomain: 'authen-typescript.firebaseapp.com',
    projectId: 'authen-typescript',
    storageBucket: 'authen-typescript.firebasestorage.app',
    messagingSenderId: '635882955070',
    appId: '1:635882955070:web:973e18bcdab0a2c8f38c6f',
    measurementId: 'G-GF0TCEWVBF'
};

const app = initializeApp(firebaseConfig);

// Export Firebase services
export const db = getFirestore(app);

export default app