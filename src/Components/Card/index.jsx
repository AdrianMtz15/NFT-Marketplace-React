import PropTypes from 'prop-types';

import { useContext } from "react";
import { ItemContext } from "../../Context";


function Card({
  data
}) {
  const itemsContext = useContext(ItemContext);

  return(
    // box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1)
    <section className={`p-[10px] relative flex flex-col items-center justify-center w-[100%] mt-[70px] bg-[#F6FAFF] rounded-[12px]`}>
      <img className=' w-full m-0' src={data.img} alt="nft-image" />

      <div 
        onClick={() => {
          const newItems = [...itemsContext.items];
          newItems.map(item => {
            item.id == data.id ? item.isInCart = true : null;
          })
          itemsContext.setItems(newItems);
        }}
        className='absolute text-[2rem] cursor-pointer top-[5%] right-[5%] flex justify-center items-center bg-white w-[30px] h-[30px] rounded-full m-2 p-1'>
          +
      </div>

      <div className='w-full flex flex-row justify-between items-start mt-[10px]'>
        <article>
          <p className='color-[#130F26] text-[1.3rem] font-bold'>{data.title}</p>
          <p>@{data.user.username}</p>
        </article>
        <img className='w-[17%]' src={data.user.profileImg} alt="profile-photo"/>
      </div>
    </section>
  )
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export {
  Card
}