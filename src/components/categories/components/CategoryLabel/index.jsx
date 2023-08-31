import React from 'react';
import { useCategoryActions } from "../../hooks/useCategoryActions"
import { useAppSelector } from "../../../../utils/hooks/useStore";

import PropTypes from 'prop-types';

function CategoryLabel({
  category
}) {
  const currentCategory = useAppSelector(state => state.categories.current);
  const [isActive, setIsActive] = React.useState(false);
  const { setCurrentCategory } = useCategoryActions();
  const categoryName = category.title.toLowerCase();


  const handleFilterByCategory = async () => {
    if (isActive) {
      setCurrentCategory('');
    } else {
      setCurrentCategory(categoryName);
    }
  }

  React.useEffect(() => {
    if(currentCategory === categoryName) {
      setIsActive(true);
    } else {
      setIsActive(false);
    } 

  }, [currentCategory]);

  return(
    <li 
      onClick={handleFilterByCategory}
      className={
        `bg-${isActive ? '[#0997FF]': '[#F6FAFF]'} flex flex-row items-center 
        px-5 py-4 rounded-[5px] cursor-pointer my-3 mx-2`
      }
    >
      <img className='w-[15px] mr-3' src={category.iconSrc} alt="category-icon" />
      <p className={`fonts-sans font-medium text-[1rem] text-${isActive ? 'white' : '[#9B9DA0]'}`}>{category.title}</p>
    </li>
  )
}

CategoryLabel.propTypes = {
  category: PropTypes.object.isRequired,
};

export {
  CategoryLabel
}