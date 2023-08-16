import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

import { SellerLabel } from '../SellerLabel';
import { Button } from '../Button';
import { XCircleIcon } from '@heroicons/react/24/solid';
import bitcoinIco from '../../assets/ico/bitcoin.png';

function ModalCard({ 
  data, 
  closeModal
}) {

  if (!data.isOpen) {
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
        {data.nft.title}
      </h3>

      <article className='bg-white shadow-lg p-8 rounded-[10px] mt-10'>
        <img 
          className='w-[100%]' 
          src={data.nft.img} 
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
        <SellerLabel sellerData={data.nft.user}/>
      </article>


      <article className='w-full mt-5 shadow-md' onClick={closeModal}>
        <Link to={'marketplace/checkout/' + data.nft.id}>
          <Button text='Purchase' textColor={'white'} bgColor={'[#0997FF]'}/>
        </Link>
      </article>
    </section>,
    document.getElementById('nft-modal')
  );
}


ModalCard.propTypes = {
  data: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export {
  ModalCard
}