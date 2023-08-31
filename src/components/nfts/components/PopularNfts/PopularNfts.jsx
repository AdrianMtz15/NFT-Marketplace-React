import React from 'react';
import PropTypes from 'prop-types';

import { Card } from "../Card";
import { useFilterNfts } from '../../hooks/useFilterNfts';

export function PopularNfts({ setNftOpen }) {
  const nfts = useFilterNfts();
  React.useEffect(() => {
  }, []);

  return(
    <div 
      className="relative flex flex-row flex-wrap justify-center w-full 
      max-w-[700px] mt-[30px] mx-auto">
      {
        nfts?.map(item => (
          <Card 
            key={item.id} 
            item={item} 
            onClick={() => {
              setNftOpen({
                isOpen: true,
                nft: item
              });
            }}
          />
        )) 
      }
    </div>
  )
}

PopularNfts.propTypes = {
  setNftOpen: PropTypes.func.isRequired,
};