import React from "react";
import { useAppSelector } from "./store"

export function useNftsRender() {
  const nftsState = useAppSelector((state) => state.nfts);
  const browserState = useAppSelector(state => state.browser);
  const categoryState = useAppSelector(state => state.category);

  const [nfts, setNfts] = React.useState([]);

  React.useEffect(() => {
    if (browserState.length > 0) {
      setNfts(nftsState.filteredBySearch);

    }
    
    if(nftsState.filteredByCategory.length > 0) {
      setNfts(nftsState.filteredByCategory);
      
    } 
    
    // if{
    //   setNfts(nftsState.allNfts);
    // }
  }, [browserState, categoryState]);



  return [nfts];
}