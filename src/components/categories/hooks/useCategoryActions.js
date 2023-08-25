import { setCategory } from "../store/slice";
import { useAppDispatch } from "../../../utils/hooks/useStore";


export function useCategoryActions() {
	const dispatch = useAppDispatch();

  const setCurrentCategory = (category) => {
    dispatch(setCategory(category)); 
  }

  return {
      setCurrentCategory,
  }
}