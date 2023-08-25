import { useAppDispatch } from "../../../../utils/hooks/useStore";
import { setSearch } from '../store/slice';

export function useBrowserActions() {
	const dispatch = useAppDispatch();

  const setSearchText = (text) => {
    dispatch(setSearch(text));
  }

  return {
    setSearchText
  }
}