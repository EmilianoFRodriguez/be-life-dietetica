import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
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

export default async function getItemsByCategoryFromDatabase(categoryURL) {
    const colectionRef = collection(database, "products-list");
    const q = query(colectionRef, where("category", "==", categoryURL));
    const querySnapshot = await getDocs(q);
    const documents = querySnapshot.docs;
    const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    
    return dataProducts;
};