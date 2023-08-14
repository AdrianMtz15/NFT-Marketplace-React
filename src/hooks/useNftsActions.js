import { useAppDispatch } from "../hooks/store";
import { fetchNfts } from "../redux/nfts/slice";
import { getNfts } from "../services/db";

export function useNftsActions() {
	const dispatch = useAppDispatch();

  const getAllNfts = async () => {
    const data = await getNfts();
    dispatch(fetchNfts(data))
  }


  return {
    getAllNfts
  }
}