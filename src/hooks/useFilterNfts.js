import React from "react";
import { useAppSelector } from "./store";

export function useFilterNfts() {
  const nfts = useAppSelector(state => state.nfts.allNfts);
  const searchFilter = useAppSelector(state => state.browser);
  const categoryFilter = useAppSelector(state => state.categories.current);

  const [filteredNfts, setFilteredNfts] = React.useState([]);

  const filterByCategory = (items) => {
    const newNfts = [];

    items.forEach(obj => {
      if(obj.category === categoryFilter) newNfts.push(obj);
    });

    return newNfts;

  }

  const filterByTitle = (items) => {
    const text = searchFilter.toLowerCase();

    const newNfts = [...items].filter(obj => {
      const nftTitle = obj.title.toLowerCase();

      if(nftTitle.includes(text)) {
        return obj;
      }
    });

    return newNfts;
  }

  React.useEffect(() => {
    let itemsFiltered = nfts;

    if(categoryFilter.length > 0) itemsFiltered = filterByCategory(itemsFiltered);
    if(searchFilter.length > 0) itemsFiltered = filterByTitle(itemsFiltered);

    setFilteredNfts(itemsFiltered);

  }, [categoryFilter, searchFilter, nfts]);


  return filteredNfts;
}