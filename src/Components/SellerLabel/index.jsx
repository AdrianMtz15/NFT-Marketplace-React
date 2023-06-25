import { useContext } from 'react';
import { ItemContext } from '../../Context';

import { Button } from '../Button';

import PropTypes from 'prop-types';


function SellerLabel({
  sellerData
}) {

  const { 
    sellers,
    setSellers
   } = useContext(ItemContext);

  const toggleFollow = () => {
    const updatedSellers = [...sellers]
    const seller = sellers.find(obj => {
      return obj.id == sellerData.id;
    })

    seller.follow = !seller.follow;

    setSellers(updatedSellers);
  }

  const textBtn = sellerData.follow ? 'Following' : 'Follow'
  const textColorBtn = sellerData.follow ? '[#0997FF]' : 'white'
  const bgColorBtn = sellerData.follow ? 'white' : '[#0997FF]'
  const borderBtn = sellerData.follow ? '[#0997FF]' : 'null'

  return(
    <>
      <section className='flex flex-row'>
        <img className='w-[50px] h-[50px] mr-2' src={sellerData.profileImg} />

        <div className='flex flex-col items-start justify-center leading-snug'>
          <h2 className="font-sans text-[1.8rem] font-bold text-black">{`${sellerData.name.firstName} ${sellerData.name.lastName}`}</h2>
          <p className="font-sans text-[1.4rem] text-[#9B9DA0]">@{sellerData.username}</p>
        </div>
      </section>
      
      <section onClick={toggleFollow} className='w-[35%] rounded-[10px] border-none'>
        <Button 
          text={textBtn} 
          textColor={textColorBtn} 
          bgColor={bgColorBtn} 
          borderColor={borderBtn}
        />
      </section>
    </>
  );
}

SellerLabel.propTypes = {
  sellerData: PropTypes.object.isRequired,
};

export {
  SellerLabel
}