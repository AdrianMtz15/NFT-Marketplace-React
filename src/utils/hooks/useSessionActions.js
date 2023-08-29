import { useAppDispatch } from "./useStore";
import { login, logout } from "../store/session/slice";

export function useSessionActions() {
  const dispatch = useAppDispatch();

  const sessionLogin = (username, email, password) => {
    dispatch(login({username, email, password}));
  }

  const sessionLogout = () => {
    dispatch(logout());
  }

  

  return {
    sessionLogin,
    sessionLogout
  }
}