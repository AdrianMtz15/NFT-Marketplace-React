import { useAppDispatch } from "./useStore";
import { login } from "../store/session/slice";

export function useSessionActions() {
  const dispatch = useAppDispatch();

  const sessionLogin = (email, password) => {
    dispatch(login({email, password}));
  }

  

  return {
    sessionLogin

  }
}