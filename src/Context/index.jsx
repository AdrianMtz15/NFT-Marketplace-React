import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';

import { db } from "../db/firebase";
import { getUser, getNft, getUsers } from "../db/db";


const ItemContext = createContext();

function ItemProvider({children}) {
  const [items, setItems] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [isNftOpen, setNftOpen] = useState(false);
  const [nftActive, setNftActive] = useState({});

  const openNftModal = () => {
    setNftOpen(true);
  }

  const closeNftModal = () => {
    setNftOpen(false);
  }

  useEffect(() => {
    const fetchData = async() => {
      try {
        const nfts = await getNft(db);
        const users = await getUsers(db);

        const nftsData = await nfts.map(async (item, index) => {
          const itemId = index;
          const isInCart = false;
          const user = await getUser(db, item.user.id);

          return {
            ...item,
            itemId,
            isInCart,
            user 
          }

        });
        
        const defaultItems = await Promise.all(nftsData);
        const defaultSellers = await users;

        setItems(defaultItems);
        setSellers(defaultSellers);
        
      }catch(err){
        console.log('Hubo un error: ', err);
      }
    }
    fetchData();
  }, []);

  
  return(
    <ItemContext.Provider value={{
      items,
      setItems,
      sellers,
      setSellers,
      isNftOpen,
      setNftOpen,
      openNftModal,
      closeNftModal,
      nftActive,
      setNftActive
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