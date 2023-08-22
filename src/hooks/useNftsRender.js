import React from "react";
import { useAppSelector } from "./store"

export function useNftsRender() {
  const nftsState = useAppSelector((state) => state.nfts);
  const [nfts, setNfts] = React.useState([]);

  React.useEffect(() => {
    if (nftsState.filteredNfts.length > 0) {
      setNfts(nftsState.filteredNfts);
    } else {
      setNfts(nftsState.allNfts);
    }
  }, [nftsState]);



  return [nfts];
}