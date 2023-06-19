import {collection, doc, getDocs, getDoc } from 'firebase/firestore/lite';




async function getNft(db) {
  const nftCol = collection(db, 'nfts');
  const nftSnapshot = await getDocs(nftCol);
  const nftList = nftSnapshot.docs.map(doc => doc.data());
  return nftList;
}

async function getUser(db, id) {
  const userRef = doc(db, 'users', id);
  const docSnap = await getDoc(userRef);

  if (docSnap.exists()) {
      return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    throw Error('No se encontro el documento');
  }
}


export {
  getNft,
  getUser
}