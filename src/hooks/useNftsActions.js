import { useAppDispatch } from "../hooks/store";
import { fetchNfts } from "../redux/nfts/slice";
import { getNfts, getUser } from "../services/db";

export function useNftsActions() {
	const dispatch = useAppDispatch();

  const getAllNfts = async () => {
    const data = await getNfts();

    const nfts = await Promise.all(data.map(async (obj) => {
      const user = await getUser(obj.user.id);
      return {
        ...obj,
        user
      }
    }));

    dispatch(fetchNfts(nfts));
  }


  return {
    getAllNfts
  }
}