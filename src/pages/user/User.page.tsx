import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { UserCard } from '../../components/userCard/UserCard.component';
import { useGetUser } from './User.hook';

export const User = () => {
  const { id } = useParams();
  const { getUser, user, isLoading } = useGetUser(id ?? '');

  useEffect(() => {
    getUser();
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h1>User</h1>
      <UserCard user={user} />
    </div>
  );
};
