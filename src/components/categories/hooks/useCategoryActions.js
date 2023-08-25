import { setCategory } from "../categories/store/slice";
import { useAppDispatch } from "./store";


export function useCategoryActions() {
	const dispatch = useAppDispatch();

  const setCurrentCategory = (category) => {
    dispatch(setCategory(category)); 
  }

  return {
      setCurrentCategory,
  }
}