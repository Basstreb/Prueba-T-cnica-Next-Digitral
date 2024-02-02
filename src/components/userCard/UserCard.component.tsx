import { useEffect } from 'react';

import { useGetPhotos, useGetUserAlbums } from '../../pages/user/User.hook';
import { UserCardProps } from './UserCard.interface';

export const UserCard = ({ user }: UserCardProps) => {
  const { albums, getUserAlbums, isLoading } = useGetUserAlbums(user.id.toString());
  const { photos, getPhotos } = useGetPhotos();

  useEffect(() => {
    getUserAlbums();
    getPhotos();
  }, []);

  return (
    <>
      <p>{user?.name}</p>
      <p>{user?.username}</p>
      <p>{user?.email}</p>
      <p>{user?.address?.city}</p>
      <p>{user?.website}</p>
      <p>{user?.company.name}</p>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h4>Albums</h4>
          <ul>
            {albums?.map((album) => (
              <li key={album.id}>
                <h5>{album.title}</h5>
                <img src={photos?.find((photo) => photo.albumId === album.id)?.thumbnailUrl} alt={album.title} />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
