import { usersRepository } from '../repositories/Users.repositories';

const getUsers = async () => {
  return usersRepository.getUsers();
}

const getUser = async (userId: string) => {
  return usersRepository.getUser(userId);
}

const getUserAlbums = async (userId: string) => {
  return usersRepository.getUserAlbums(userId);
}

const getPhotos = async () => {
  return usersRepository.getPhotos();
}

export const usersService = {
  getUsers,
  getUser,
  getUserAlbums,
  getPhotos,
};
