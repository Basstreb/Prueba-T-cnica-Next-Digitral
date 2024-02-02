import { AlbumsDTO } from '../../dto/Albums.dto';
import { PhotosDTO } from '../../dto/Photos.dto';

export interface AlbumProps {
  albums: AlbumsDTO[];
  photos: PhotosDTO[];
}
