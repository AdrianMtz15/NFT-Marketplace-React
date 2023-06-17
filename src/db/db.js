import {collection, getDocs } from 'firebase/firestore/lite';


async function getNft(db) {
  const nftCol = collection(db, 'nfts');
  const nftSnapshot = await getDocs(nftCol);
  const nftList = nftSnapshot.docs.map(doc => doc.data());
  return nftList;
}

async function getUsers(db) {
  const usersCol = await collection(db, 'users');
  const usersSnapshot = await getDocs(usersCol);
  const usersList = await usersSnapshot.docs.map(doc => doc.data());
  return usersList;
}

export {
  getNft,
  getUsers
}