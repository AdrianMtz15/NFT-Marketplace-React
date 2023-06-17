import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';

import { db } from "../db/firebase";
import { getUsers, getNft } from "../db/db";

console.log(await getUsers(db));
console.log(await getNft(db));

const ItemContext = createContext();



// const usersPhotos = [
//   "https://drive.google.com/uc?export=download&id=1kSYwUFFZf-I8A2nBdK2caihdxkMd2hjn",
//   "https://drive.google.com/uc?export=download&id=1wZzvXsMPlFz871Mm1ZhzSZJgnNYiuxhC",
//   "https://drive.google.com/uc?export=download&id=1Wo9fekCeppNJsKvX-nWK1kWKuEfYKAP5",
//   "https://drive.google.com/uc?export=download&id=1dqtZlJnJFe-OZBhQGrNhkLWoWZoKFpx7",
//   "https://drive.google.com/uc?export=download&id=162tW47YgJZaE6MOGBM_yLytzUDw5HChD"
// ]

// const defaultItems = [
//   {
//     id: 1,
//     title: "The Future wave #23",
//     endingIn: "12h 14m 3s",
//     currentBid: "0.24 BTC",
//     imgSrc: "gs://nft-marketplace-94b84.appspot.com/nft-photos/Rectangle 23 (1).png",
//     profile: {
//       username: "",
//       imgSrc: usersPhotos[2]
//     }
//   },
//   {
//     id: 2,
//     title: "Astro World #244",
//     endingIn: "12h 14m 3s",
//     currentBid: "0.24 BTC",
//     imgSrc: "https://drive.google.com/uc?export=download&id=1CPCX9e5KhmrueKv7e8i3nmghfr_jB2GE",
//     profile: {
//       username: "",
//       imgSrc: usersPhotos[0]
//     }
//   },
//   {
//     id: 3,
//     title: "Cyber Art #234",
//     endingIn: "12h 14m 3s",
//     currentBid: "0.24 BTC",
//     imgSrc: "https://drive.google.com/uc?export=download&id=1dHewh9_BC1mH3-w6FK8yeoLYQuJMASiB",
//     profile: {
//       username: "",
//       imgSrc: usersPhotos[4]
//     }
//   }
// ]

// defaultItems.map((item) => {
//   item.isInCart = false;
// });

function ItemProvider({children}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        fetch('https://fakestoreapi.com/users?limit=5')
        .then(response => response.json())
        .then(data => {
          let i = 0;
          const newItems = [...items];
          newItems.map((item) => {
            item.profile.username = data[i].username
            i++;
          })

          setItems(newItems);
          console.log(newItems);
        })
      }catch(err){
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return(
    <ItemContext.Provider value={{
      items,
      setItems
    }}>
      {children}
    </ItemContext.Provider>
  )
}

ItemProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export {
  ItemProvider,
  ItemContext
}