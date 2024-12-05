import { User } from "../types/user";
import usersFromServer from '../api/users';


export function getUserById(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null
}
