import { useAppDispatch } from "../../../utils/hooks/useStore";
import { getUser, getNfts } from "../../../utils/api/db";
import { setAllNfts, setFilterNfts } from "../store/slice";

export function useNftsActions() {
	const dispatch = useAppDispatch();

  const fetchNfts = async () => {
    const nfts = await getNfts();
    const nftsWithUsers = await setNftUser(nfts);

    dispatch(setAllNfts(nftsWithUsers));
  }

  const setFilterNftsState = (filteredNfts, filterType) => {
    dispatch(setFilterNfts({
      filteredItems: filteredNfts,
      filterType
    }));
  }

  return {
    fetchNfts,
    setFilterNftsState
    
  }
}

const setNftUser = async (nfts) => {
  const res = Promise.all(nfts.map(async (obj) => {
    const user = await getUser(obj.user.id);
    return {
      ...obj,
      user
    }
  }));

  return res;
}