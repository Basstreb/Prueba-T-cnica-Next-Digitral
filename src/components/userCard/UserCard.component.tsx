import { useEffect } from 'react';

import { useGetPhotos, useGetTodo, useGetUserAlbums } from '../../pages/user/User.hook';
import { Album } from '../album/Album.component';
import { ToDo } from '../toDo/ToDo.component';
import { UserCardProps } from './UserCard.interface';

export const UserCard = ({ user }: UserCardProps) => {
  const { albums, getUserAlbums, isAlbumsLoading } = useGetUserAlbums(user.id.toString());
  const { photos, getPhotos } = useGetPhotos();
  const { toDo, getToDo, isToDoLoading } = useGetTodo(user.id.toString());

  useEffect(() => {
    getUserAlbums();
    getPhotos();
    getToDo();
  }, []);

  return (
    <>
      <div style={{ display: 'flex', gap: 12 }}>
        <p>{user?.name}</p>
        <p>{user?.username}</p>
        <p>{user?.email}</p>
        <p>{user?.address?.city}</p>
        <p>{user?.website}</p>
        <p>{user?.company.name}</p>
      </div>

      {isAlbumsLoading ? <div>Loading...</div> : <Album albums={albums} photos={photos} />}

      {isToDoLoading ? <div>Loading...</div> : <ToDo toDo={toDo} />}
    </>
  );
};
