import { AlbumProps } from './Album.interface';

export const Album = ({ albums, photos }: AlbumProps) => {
  return (
    <>
      <h2>Albums</h2>
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
        {albums?.map((album) => (
          <li key={album.id} style={{ width: 350 }}>
            <h5>{album.title}</h5>
            <img src={photos?.find((photo) => photo.albumId === album.id)?.thumbnailUrl} alt={album.title} />
          </li>
        ))}
      </ul>
    </>
  );
};
