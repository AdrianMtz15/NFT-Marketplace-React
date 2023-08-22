// import { useContext } from 'react';
// import { ItemContext } from '../../Context';

import PropTypes from 'prop-types';

function CategoryLabel({
  category
}) {

  // const { 
  //   categoryFilter,
  //   setCategoryFilter
  // } = useContext(ItemContext);

  const toggleCategory = () => {
    // if(categoryFilter == category.title.toLowerCase()) {
    //   setCategoryFilter('');
    // } else {
    //   setCategoryFilter(category.title.toLowerCase());
    // }
  }

  return(
    <li 
      onClick={toggleCategory}
      className='bg-[#F6FAFF] flex flex-row items-center px-5 py-4 rounded-[5px] cursor-pointer'
    >
      <img className='w-[15px] mr-3' src={category.iconSrc} alt="category-icon" />
      <p className="fonts-sans font-medium text-[1rem] text-[#9B9DA0]">{category.title}</p>
    </li>
  )
}

CategoryLabel.propTypes = {
  category: PropTypes.object.isRequired,
};

export {
  CategoryLabel
}