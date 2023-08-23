import React from 'react';
import { useCategoryActions } from "../../hooks/useCategoryActions"
import { useNftsRender } from '../../hooks/useNftsRender';
import { useFilterNfts } from '../../hooks/useFilterNfts'
import { useAppSelector } from "../../hooks/store";
import { useNftsActions } from '../../hooks/useNftsActions';

import PropTypes from 'prop-types';

function CategoryLabel({
  category
}) {
  const categoriesActives = useAppSelector(state => state.categories);
  const [isActive, setIsActive] = React.useState(false);
  const [nfts] = useNftsRender();

  const { setFilterNftsState } = useNftsActions();
  const { setCategoryName, deleteCategoryName } = useCategoryActions();
  const { filterByCategory } = useFilterNfts();

  const handleFilterByCategory = async () => {
    const categoryName = category.title.toLowerCase();

    if(isActive) {
      deleteCategoryName(categoryName);
    } else {
      setCategoryName(categoryName);
    }

    setIsActive(!isActive);
  }

  React.useEffect(() => {
    const nftsByCategory = filterByCategory(categoriesActives, nfts);
    setFilterNftsState(nftsByCategory);
  }, [categoriesActives])

  return(
    <li 
      onClick={handleFilterByCategory}
      className={`bg-${isActive ? '[#0997FF]': '[#F6FAFF]'} flex flex-row items-center px-5 py-4 rounded-[5px] cursor-pointer`}
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