import PropTypes from 'prop-types';

import { Card } from "../Card";
import { useNftsRender } from '../../hooks/useNftsRender';
// import { useAppSelector } from '../../hooks/store';

export function PopularNfts({ setNftOpen }) {
  // const allNfts = useAppSelector(state => state.allNfts);
  const [nfts] = useNftsRender();

  return(
    <div className="relative grid gap-[2rem] grid-cols-3 w-full h-max-h mt-[30px]">
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