import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';

import { db } from "../db/firebase";
import { getNft, getUsers } from "../db/db";

const ItemContext = createContext();

  // Sates
  // itemsState - Array State for nfts
  // sellersState - Array State for nft sellers
  // nftOpenState - Boolean State to open and close ModalCard
  // nftActiveState - Object State used for show nft data in ModalCard

function ItemProvider({children}) {
  const [items, setItems] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [isNftOpen, setNftOpen] = useState(false);
  const [nftActive, setNftActive] = useState({});
  const [searchInput, setSearchInput] = useState('');
  const [filterItems, setFilterItems] = useState({});

  // Functions - Used for open and close ModalCard
  const openNftModal = () => {
    setNftOpen(true);
  }

  const closeNftModal = () => {
    setNftOpen(false);
  }

  // Hook - useEffect used for get data from db and set it on States

  useEffect(() => {
    // Async Funcion - Used for async functions 
    const fetchData = async() => {
      try {
        // DB - getting sellers data from db
        const sellers = await getUsers(db);

        // Objects Array - Setting properties on sellers
        const defaultSellers = await sellers.map(user => {
          return {
            ...user,
            follow: false
          }
        })

        // DB - getting nfts data from db
        const nfts = await getNft(db);

        // Objects Array - setting properties on nfts 
        const defaultNfts = await nfts.map((item) => {
          // Searching seller data
          const user = defaultSellers.find((element) => {
            return element.id == item.user.id;
          });

          return {
            ...item,
            user
          }
        });

        setItems(defaultNfts);
        setSellers(defaultSellers);
        
      }catch(err){
        console.log('Hubo un error: ', err);
      }
    }
    
    fetchData();
  }, []);

  const searchItems = () => {
    return items?.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase()));
  }

  useEffect(() => {
    if(searchInput) setFilterItems(searchItems());
  },[items, searchInput]);


  const renderItems = () => {
    if(filterItems.length > 0 && searchInput.length >0){
      return filterItems
    } else {
      return items
    }  
  }

  
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
      setNftActive,
      searchInput,
      setSearchInput,
      filterItems,
      setFilterItems,
      renderItems
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