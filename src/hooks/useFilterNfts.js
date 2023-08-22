
export function useFilterNfts() {

  const filterByTitle = (text, nfts) => {
    const searchFilter = text.toLowerCase();

    const newNfts = [...nfts].filter(obj => {
      const nftTitle = obj.title.toLowerCase();
      if(nftTitle.includes(searchFilter)) {
        return obj;
      }
    });

    return newNfts;
  }


  return {
    filterByTitle
  }
 
}