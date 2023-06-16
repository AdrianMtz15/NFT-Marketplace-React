import PropTypes from 'prop-types';


function Label({
  imgSrc,
  title
}) {
  return(
    <div>
      <img src={imgSrc} alt="category-icon" />
      <p>{title}</p>
    </div>
  )
}

Label.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export {
  Label
}