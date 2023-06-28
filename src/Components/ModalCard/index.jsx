import { createPortal } from 'react-dom';
import { useContext } from 'react';
import { ItemContext } from '../../Context';
import PropTypes from 'prop-types';

import { SellerLabel } from '../SellerLabel';
import { Button } from '../Button';
import { XCircleIcon } from '@heroicons/react/24/solid';
import bitcoinIco from '../../assets/ico/bitcoin.png';

function ModalCard({ 
  isOpen, 
  closeModal
}) {
  const {
    nftActive,
  } = useContext(ItemContext);


  if (!isOpen) {
    return null;
  }

  return createPortal(
    <section 
      className='relative flex flex-col items-center w-[60%] bg-[#F6FAFF] 
      shadow-lg p-[30px] rounded-[10px] border-solid  border-[#9B9DA0]' 
    >

      <article className='absolute top-[10px] right-[10px] w-[30px]
        cursor-pointer self-end z-10'> 
        <XCircleIcon 
          className='hover:fill-red-700 fill-[#4D4A4A]' 
          onClick={closeModal}
        />
      </article>

      <h3 className='absolute top-0 bg-white w-full h-16 font-sans flex justify-center 
        items-center font-bold text-[2rem] text-center text-[#130F26] rounded-t-[10px] 
        shadow-md'>
        {nftActive.title}
      </h3>

      <article className='bg-white shadow-lg p-8 rounded-[10px] mt-10'>
        <img 
          className='w-[100%]' 
          src={nftActive.img} 
          alt="nft-img" 
        />

        <div className='w-[100%] flex flex-row items-center justify-between mt-5'>
          <section>
            <p className='font-sans text-[1.2rem] text-[#9B9DA0]'>Current Bid</p>

            <article className='flex flex-row items-center'>
              <img className='mr-[5px]' src={bitcoinIco} alt="bitcoin-icon" />
              <p className='font-sans font-bold text-[1.4rem] text-[#130F26]'>0.24 BTC</p>
            </article>
          </section>

          <section>
            <p className='font-sans text-[1.2rem] text-[#9B9DA0] text-right'>Endind In</p>
            <p className='font-sans font-bold text-[1.4rem] text-[#130F26]'>12h 14m 16s</p>
          </section>
        </div>
      </article>


 

      <article 
        className='justify-between w-[100%] flex flex-row h-[max-content] 
        items-center mt-5 bg-white p-5 shadow-md'
      >
        <SellerLabel sellerData={nftActive.user}/>
      </article>

      <article className='w-full mt-5 shadow-md'>
        <Button text='Purchase' textColor={'white'} bgColor={'[#0997FF]'}/>
      </article>
    </section>,
    document.getElementById('nft-modal')
  );
}


ModalCard.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export {
  ModalCard
}