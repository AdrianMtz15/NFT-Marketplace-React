import {collection, doc, getDocs, getDoc } from 'firebase/firestore/lite';

async function getNft(db) {
  const nftCol = collection(db, 'nfts');
  const nftSnapshot = await getDocs(nftCol);
  const nftList = nftSnapshot.docs.map(doc => doc.data());
  return nftList;
}

async function getUsers(db) {
  const usersCol = collection(db, 'users');
  const usersSnapshot = await getDocs(usersCol);
  const usersList = usersSnapshot.docs.map(doc => {
    const obj = doc.data();
    obj.id = doc.id;
    
    return obj;
  });
  return usersList;
}

async function getUser(db, id) {
  const userRef = await doc(db, 'users', id);
  const docSnap = await getDoc(userRef);

  if (docSnap.exists()) {
    return await docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    throw Error('No se encontro el documento');
  }
}


export {
  getNft,
  getUsers,
  getUser
}