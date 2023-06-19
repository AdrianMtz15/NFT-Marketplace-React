import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';

import { db } from "../db/firebase";
import { getUser, getNft } from "../db/db";


const ItemContext = createContext();
const defaultItems = await getNft(db);

console.log(defaultItems);

function ItemProvider({children}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        await defaultItems.map(async (item, index) => {
          item.itemId = index;
          item.user = await getUser(db, item.user.id);
        });

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