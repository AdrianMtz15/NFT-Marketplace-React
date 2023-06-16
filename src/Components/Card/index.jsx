import PropTypes from 'prop-types';

function Card({
  data
}) {
  return(
    // box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1)
    <section className={`p-[10px] relative flex flex-col items-center justify-center w-[100%] mt-[70px] bg-[#F6FAFF] rounded-[12px]`}>
      <img className=' w-full m-0' src={data.imgSrc} alt="nft-image" />

      <div className='w-full flex flex-row justify-between items-start mt-[10px]'>
        <article>
          <p className='color-[#130F26] text-[1.3rem] font-bold'>{data.title}</p>
          <p>{data.profile.username}</p>
        </article>
        <img className='w-[17%]' src={data.profile.imgSrc} alt="profile-photo"></img>
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