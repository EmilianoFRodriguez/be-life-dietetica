import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import productList from '../products/productsList'

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

export async function exportData(){
    for(let item of productList){
      const collectionRef = collection(database, "products-list")
      const {id} = await addDoc(collectionRef, item)
      console.log("lista Creada", id);
    }
};