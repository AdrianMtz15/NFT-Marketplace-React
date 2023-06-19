import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';

import { db } from "../db/firebase";
import { getUser, getNft } from "../db/db";


const ItemContext = createContext();

function ItemProvider({children}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const nfts = await getNft(db);

        const nftsData = await nfts.map(async (item, index) => {
          const itemId = index;
          const isInCart = false;
          const user = await getUser(db, item.user.id) ;

          return {
            ...item,
            itemId,
            isInCart,
            user 
          }

        });
        
        const defaultItems = await Promise.all(nftsData);

        setItems(defaultItems);
        
      }catch(err){
        console.log('Hubo un error: ', err);
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