import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyCaOSf4kB46mxg0YHzqoL0dHS1fPOdTLL0',
  authDomain: 'react-router-vanlife.firebaseapp.com',
  projectId: 'react-router-vanlife',
  storageBucket: 'react-router-vanlife.appspot.com',
  messagingSenderId: '929732882791',
  appId: '1:929732882791:web:a446c09d2e427390e1ffc2',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, 'vans');

export async function getAllVans() {
  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}

export async function getVan(id) {
  const docRef = doc(db, 'vans', id);
  const vanSnapshot = await getDoc(docRef);
  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where('hostId', '==', 123));
  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}
