import { deleteCategory, setCategory } from "../redux/category/slice";
import { useAppDispatch, useAppSelector } from "./store";


export function useCategoryActions() {
	const dispatch = useAppDispatch();

  const categories = useAppSelector(state => state.categories);

  const setCategoryName = async (category) => {
    let isAlreadyActive;

    categories.map(elem => {
      if (elem === category) isAlreadyActive = true;
    })

    if(!isAlreadyActive)await dispatch(setCategory(category));
  }

  const deleteCategoryName = async (category) => {
    await dispatch(deleteCategory(category))
  }

  return {
      setCategoryName,
      deleteCategoryName
  }
}