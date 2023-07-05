import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';

import { db } from "../db/firebase";
import { getNft, getUsers } from "../db/db";
import { useLocalStorage } from "../utils/LocalStorage";

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
  const [categoryFilter, setCategoryFilter] = useState('');
  const [renderItems, setRenderItems] = useState([]);

  const [signOut, setSignOut] = useLocalStorage('sign-out', true);

  // Functions - Used for open and close ModalCard
  const openNftModal = () => {
    setNftOpen(true);
  }

  const closeNftModal = () => {
    setNftOpen(false);
  }

  const searchItems = (itemsArr) => {
    if(searchInput.length > 0) {
      const searchedItems = itemsArr?.filter(item => {
        const itemTitle = item.title.toLowerCase();
        const searchText = searchInput.toLowerCase();
  
        return itemTitle.includes(searchText);
      });
  
      return searchedItems;
    } else {
      return itemsArr;
    }

  }

  const filterByCategory = (itemsArr) => {
    if(categoryFilter) {
      const filteredItems = itemsArr?.filter(item => {
        const itemCategory = item.category.toLowerCase();
        const category = categoryFilter.toLowerCase();
  
        return itemCategory.includes(category);
      });

      return filteredItems;
    } else {
      return itemsArr;
    }
  }

  // Hook - useEffect used for get data from db and set it on States
  useEffect(() => {
    const fetchData = async() => {
      try {
        const sellers = await getUsers(db);
        const nfts = await getNft(db);

        const defaultSellers = await sellers.map(user => {
          return {
            ...user,
            follow: false
          }
        })

        const defaultNfts = await nfts.map((item) => {
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

    return () => {
      setSearchInput('');
    }
  }, []);

  useEffect(() => {
    if (items) { 
      const searchedItems = searchItems(items);
      const filteredItems = filterByCategory(searchedItems);
  
      setRenderItems(filteredItems);
    }

  },[items, searchInput, categoryFilter]);

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
      categoryFilter,
      setCategoryFilter,
      setRenderItems,
      renderItems,
      signOut,
      setSignOut
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