import PropTypes from 'prop-types';

function Button({
  textColor,
  bgColor,
  borderColor,
  text
}) {

  return(
    <button 
      type='button' 
      className={`w-[100%] outline-none cursor-pointer font-medium 
      text-${textColor} bg-${bgColor} border border-solid border-${borderColor} 
      rounded-[4px] text-[1.4rem] min-h-[6vh]  mr-[7px]`}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
  text: PropTypes.string.isRequired
};

export {
  Button
}