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
      className="relative flex flex-row flex-wrap justify-center w-[100%]
      max-w-[700px] mt-[30px] mx-auto">
      {
        nfts?.map(item => (
          <div 
            key={item.id} 
            className='relative w-[30%] mx-2 my-3 min-w-[200px] 
            lg:min-w-[180px]'
          >

            <Card 
              item={item} 
              onClick={() => {
                setNftOpen({
                  isOpen: true,
                  nft: item
                });
              }}
            />
            
          </div>
        )) 
      }
    </div>
  )
}

PopularNfts.propTypes = {
  setNftOpen: PropTypes.func.isRequired,
};