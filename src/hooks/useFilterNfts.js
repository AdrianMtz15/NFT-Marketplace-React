
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

  const filterByCategory = (categories, nfts) => {
    const newNfts = [];

    nfts.forEach(obj => {
      categories.forEach(category => {
        if(obj.category === category) newNfts.push(obj);
      });
    });

    return newNfts;
  }


  return {
    filterByTitle,
    filterByCategory
  }
 
}