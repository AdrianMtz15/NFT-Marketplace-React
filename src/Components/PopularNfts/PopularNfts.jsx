import PropTypes from 'prop-types';

import { useAppSelector } from "../../hooks/store";
import { Card } from "../Card";

export function PopularNfts({ setNftOpen }) {
  const nfts = useAppSelector((state) => state.nfts);

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