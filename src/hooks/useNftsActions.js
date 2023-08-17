import { useAppDispatch } from "../hooks/store";
import { fetchNfts } from "../redux/nfts/slice";
import { getNft, getNfts, getUser } from "../services/db";

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

export function useNftsActions() {
	const dispatch = useAppDispatch();

  const getAllNfts = async () => {
    const data = await getNfts();
    const nftsWithUsers = await setNftUser(data);

    dispatch(fetchNfts(nftsWithUsers));
  }

  const fetchNft = async (id) => {
    const data = await getNft(id);
    return data;
  }

  return {
    getAllNfts,
    fetchNft
  }
}