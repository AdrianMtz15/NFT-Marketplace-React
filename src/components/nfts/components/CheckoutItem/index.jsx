
import PropTypes from 'prop-types';


import bitcoinIco from '../../assets/ico/bitcoin.png';


function CheckoutItem({
  item
}) {
  return(
    <section className="50%">
      <article className='bg-white shadow-lg p-8 rounded-[10px]'>
        <img 
          className='w-[100%]' 
          src={item.img} 
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
    </section>
  )
}

CheckoutItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export {
  CheckoutItem
}