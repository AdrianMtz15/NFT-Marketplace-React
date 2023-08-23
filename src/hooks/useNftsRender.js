import React from "react";
import { useAppSelector } from "./store"

export function useNftsRender() {
  const nftsState = useAppSelector((state) => state.nfts);
  const [nfts, setNfts] = React.useState([]);

  React.useEffect(() => {
    if (nftsState.filteredBySearch.length > 0) {
      setNfts(nftsState.filteredBySearch);
    } else {
      setNfts(nftsState.allNfts);
    }
  }, [nftsState]);



  return [nfts];
}