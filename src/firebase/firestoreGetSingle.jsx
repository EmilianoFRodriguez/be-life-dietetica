import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDyZPZjAXBaqxyH39o7dNX-pTuGWQPu8b8",
    authDomain: "be-life-dietetica.firebaseapp.com",
    projectId: "be-life-dietetica",
    storageBucket: "be-life-dietetica.appspot.com",
    messagingSenderId: "895033552717",
    appId: "1:895033552717:web:092b4f5bb393d37a679104"
  };

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default async function getSingleItemFromDatabase(idItem) {
    const productRef = doc(database, "products-list", idItem);
    const docSnapshot = await getDoc(productRef);

    return { ...docSnapshot.data(), id: docSnapshot.id };
}