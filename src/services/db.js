import {collection, doc, getDocs, getDoc } from 'firebase/firestore/lite';
import { db } from './firebase';

async function getNft(id) {
  const userRef = await doc(db, 'nfts', id);
  const docSnap = await getDoc(userRef);

  if (docSnap.exists()) {
    return await docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    throw Error('No se encontro el documento');
  }
}

async function getNfts() {
  const nftCol = collection(db, 'nfts');
  const nftSnapshot = await getDocs(nftCol);
  const nftList = await nftSnapshot.docs.map(doc => {
    const obj = doc.data();
    obj.id = doc.id;
    
    return obj;
  })
  return nftList;
}

async function getUser(id) {
  const userRef = await doc(db, 'users', id);
  const docSnap = await getDoc(userRef);

  if (docSnap.exists()) {
    return await docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    throw Error('No se encontro el documento');
  }
}

async function getUsers() {
  const usersCol = collection(db, 'users');
  const usersSnapshot = await getDocs(usersCol);
  const usersList = usersSnapshot.docs.map(doc => {
    const obj = doc.data();
    obj.id = doc.id;
    
    return obj;
  });
  return usersList;
}




export {
  getNft,
  getNfts,
  getUser,
  getUsers,
}