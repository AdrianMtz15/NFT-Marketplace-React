import { useAppDispatch } from "./useStore";
import { login, logout, toggleNav } from "../store/session/slice";

export function useSessionActions() {
  const dispatch = useAppDispatch();

  const sessionLogin = (username, email, password) => {
    dispatch(login({username, email, password}));
  }

  const sessionLogout = () => {
    dispatch(logout());
  }

  const sessionToggleNav = () => {
    dispatch(toggleNav());
  }

  return {
    sessionLogin,
    sessionLogout,
    sessionToggleNav
  }
}