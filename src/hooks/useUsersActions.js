import { fetchUsers } from "../redux/users/slice";
import { getUsers } from "../services/db"
import { useAppDispatch } from "./store";


export function useUsersActions() {
	const dispatch = useAppDispatch();

  const getAllUsers = async () => {
    const data = await getUsers();
    const users = data.map(obj => {
      return {
        ...obj,
        follow: false
      }
    });
    dispatch(fetchUsers(users));
  }

  return {
    getAllUsers
  }
}
