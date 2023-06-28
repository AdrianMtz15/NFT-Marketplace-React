import PropTypes from 'prop-types';

import { useContext } from "react";
import { ItemContext } from "../../Context";

function Card({
  item
}) {
  const itemsContext = useContext(ItemContext);

  return(
    <section 
      onClick={() => {
        itemsContext.openNftModal();
        itemsContext.setNftActive(item)
      }}
      className={`cursor-pointer shadow p-[10px] relative flex flex-col 
      items-center justify-center w-[100%] bg-[#F6FAFF] rounded-[12px]`}
    >

      <img 
        className=' w-full m-0' 
        src={item.img} 
        alt="nft-image" 
      />

      <div className='w-full flex flex-row justify-between items-start mt-[10px]'>
        <article>
          <p className='color-[#130F26] text-[1.3rem] font-bold'>{item.title}</p>
          <p>@{item.user ? item.user.username : null}</p>
        </article>

        <img 
          src={item.user ? item.user.profileImg : null} 
          alt="profile-photo" 
          className='w-[17%]' 
        />
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