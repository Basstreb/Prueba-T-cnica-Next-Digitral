const USERS_DATA_API_URL = 'https://jsonplaceholder.typicode.com/users/';
const USER_DATA_API_URL = `${USERS_DATA_API_URL}{user-id}`;

const getUsers = async () => {
  const response = await fetch(USERS_DATA_API_URL);
  return response.json();
};

const getUser = async (userId: string) => {
  const response = await fetch(USER_DATA_API_URL.replace('{user-id}', userId));
  return response.json();
};

export const usersRepository = {
  getUsers,
  getUser,
};
