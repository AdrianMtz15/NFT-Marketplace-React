import PropTypes from 'prop-types';

import { Button } from '../Button';

function SellerLabel({
  sellerData
}) {
  return(
    <li className='mt-[20px] flex flex-row justify-between items-center'>
      <section className='flex flex-row'>
        <img className='w-[50px] h-[50px] mr-2' src={sellerData.profileImg} />

        <div className='flex flex-col items-start justify-center leading-snug'>
          <h2 className="font-sans text-[1.8rem] font-bold text-black">{`${sellerData.name.firstName} ${sellerData.name.lastName}`}</h2>
          <p className="font-sans text-[1.4rem] text-[#9B9DA0]">@{sellerData.username}</p>
        </div>
      </section>
      
      <section className='w-[35%] rounded-[10px]'>
        <Button text='Follow' textColor='white' bgColor='[#0997FF]'/>
      </section>
    </li>
  );
}

SellerLabel.propTypes = {
  sellerData: PropTypes.object.isRequired,
};

export {
  SellerLabel
}