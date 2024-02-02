import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { UserDTO } from '../user/User.dto';
import { useGetUsers } from './Users.hook';

export const Users = () => {
  const { getUsers, users } = useGetUsers();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users?.map((user: UserDTO) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
