import PropTypes from 'prop-types';

import { useContext } from "react";
import { ItemContext } from "../../Context";

import { PlusIcon } from '@heroicons/react/24/solid';

function Card({
  item
}) {
  const itemsContext = useContext(ItemContext);
  return(
    <section className={`shadow p-[10px] relative flex flex-col items-center justify-center w-[100%] mt-[70px] bg-[#F6FAFF] rounded-[12px]`}>
      <img className=' w-full m-0' src={item.img} alt="nft-image" />

      <div 
        onClick={() => {
          const newItems = [...itemsContext.items];
          newItems.map(obj => {
            obj.itemId == item.itemId ? item.isInCart = true : null;
          });
          itemsContext.setItems(newItems);
        }}
        className='absolute text-[2rem] cursor-pointer top-[5%] right-[5%] flex justify-center items-center bg-white w-[30px] h-[30px] rounded-full m-2 p-1'>
          <PlusIcon fill='black' className="w-6 h-6"/>
          
      </div>

      <div className='w-full flex flex-row justify-between items-start mt-[10px]'>
        <article>
          <p className='color-[#130F26] text-[1.3rem] font-bold'>{item.title}</p>
          <p>@{item.user ? item.user.username : null}</p>
        </article>
        <img src={item.user ? item.user.profileImg : null} alt="profile-photo" className='w-[17%]' />
      </div>
    </section>
  )
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export {
  Card
}