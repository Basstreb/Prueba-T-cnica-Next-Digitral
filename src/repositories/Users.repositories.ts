const USERS_DATA_API_URL = 'https://jsonplaceholder.typicode.com/users/';
const USER_DATA_API_URL = `${USERS_DATA_API_URL}{user-id}`;
const USER_ALBUM_DATA_API_URL = `${USERS_DATA_API_URL}{user-id}/albums`;
const PHOTOS_DATA_API_URL = 'https://jsonplaceholder.typicode.com/photos/';
const TODO_DATA_API_URL = 'https://jsonplaceholder.typicode.com/todos/';

const getUsers = async () => {
  const response = await fetch(USERS_DATA_API_URL);
  return response.json();
};

const getUser = async (userId: string) => {
  const response = await fetch(USER_DATA_API_URL.replace('{user-id}', userId));
  return response.json();
};

const getUserAlbums = async (userId: string) => {
  const response = await fetch(USER_ALBUM_DATA_API_URL.replace('{user-id}', userId));
  return response.json();
}

const getPhotos = async () => {
  const response = await fetch(PHOTOS_DATA_API_URL);
  return response.json();
}

const getToDo = async () => {
  const response = await fetch(TODO_DATA_API_URL);
  return response.json();
}

export const usersRepository = {
  getUsers,
  getUser,
  getUserAlbums,
  getPhotos,
  getToDo,
};
