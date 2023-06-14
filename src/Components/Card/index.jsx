import PropTypes from 'prop-types';

function Card({
  data
}) {
  return(
    <section className='w-[200px] mt-[70px]'>
      <img src={data.imgSrc} alt="nft-image" />

      <div className='w-full flex flex-row justify-start items-center'>
        <p>{data.title}</p>
        <img src={data.profile.imgSrc} alt="profile-photo"></img>
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