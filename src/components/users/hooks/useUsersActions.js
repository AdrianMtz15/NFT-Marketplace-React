
import { fetchUsers, updateUsers } from "../store/slice";
import { getUsers } from "../../../utils/api/db";
import { useAppDispatch } from "../../../utils/hooks/useStore";

export function useUsersActions() {
	const dispatch = useAppDispatch();

  const setAllUsers = async () => {
    const data = await getUsers();
    const users = data.map(obj => {
      return {
        ...obj,
        follow: false
      }
    });
    
    dispatch(fetchUsers(users));
  }

  const updateAllUsers = (users) => {
    dispatch(updateUsers(users));
  }

  return {
    setAllUsers,
    updateAllUsers
  }
}
