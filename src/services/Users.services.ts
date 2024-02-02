import { usersRepository } from '../repositories/Users.repositorie';

const getUsers = async () => {
  return usersRepository.getUsers();
}

const getUser = async (userId: string) => {
  return usersRepository.getUser(userId);
}

export const usersService = {
  getUsers,
  getUser,
};
