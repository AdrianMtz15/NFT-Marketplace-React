import { useAppDispatch } from "./store";
import { setSearch } from '../redux/browser/slice';

export function useBrowserActions() {
	const dispatch = useAppDispatch();

  const setSearchText = (text) => {
    dispatch(setSearch(text));
  }

  return {
    setSearchText
  }
}