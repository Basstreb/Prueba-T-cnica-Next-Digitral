import { useState } from 'react';

import { AlbumsDTO } from '../../dto/Albums.dto';
import { PhotosDTO } from '../../dto/Photos.dto';
import { ToDoDTO } from '../../dto/ToDo.dto';
import { RequestStatus } from '../../enums/RequestStatus.enum';
import { usersService } from '../../services/Users.services';
import { UserDTO } from './User.dto';

export const useGetUser = (id: string) => {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);
  const [requestStatus, setRequestStatus] = useState(RequestStatus.PENDING);

  const getUser = async () => {
    setRequestStatus(RequestStatus.PENDING);
    try {
      const response = usersService.getUser(id);
      const data = await response;
      setUser(data);
      setRequestStatus(RequestStatus.SUCCESS);
    } catch (error) {
      setRequestStatus(RequestStatus.ERROR);
    }
  };

  return {
    user,
    isLoading: requestStatus === RequestStatus.PENDING,
    isError: requestStatus === RequestStatus.ERROR,
    getUser,
  };
}

export const useGetUserAlbums = (id: string) => {
  const [albums, setAlbums] = useState<AlbumsDTO[]>([] as AlbumsDTO[]);
  const [requestStatus, setRequestStatus] = useState(RequestStatus.PENDING);

  const getUserAlbums = async () => {
    setRequestStatus(RequestStatus.PENDING);
    try {
      const response = usersService.getUserAlbums(id);
      const data = await response;
      setAlbums(data);
      setRequestStatus(RequestStatus.SUCCESS);
    } catch (error) {
      setRequestStatus(RequestStatus.ERROR);
    }
  };

  return {
    albums,
    isAlbumsLoading: requestStatus === RequestStatus.PENDING,
    isError: requestStatus === RequestStatus.ERROR,
    getUserAlbums,
  };
}

export const useGetPhotos = () => {
  const [photos, setPhotos] = useState<PhotosDTO[]>([] as PhotosDTO[]);
  const [requestStatus, setRequestStatus] = useState(RequestStatus.PENDING);

  const getPhotos = async () => {
    setRequestStatus(RequestStatus.PENDING);
    try {
      const response = usersService.getPhotos();
      const data = await response;
      setPhotos(data);
      setRequestStatus(RequestStatus.SUCCESS);
    } catch (error) {
      setRequestStatus(RequestStatus.ERROR);
    }
  };

  return {
    photos,
    isPhotosLoading: requestStatus === RequestStatus.PENDING,
    isError: requestStatus === RequestStatus.ERROR,
    getPhotos,
  };
}

export const useGetTodo = (id: string) => {
  const [toDo, setToDo] = useState<ToDoDTO[]>([] as ToDoDTO[]);
  const [requestStatus, setRequestStatus] = useState(RequestStatus.PENDING);

  const getToDo = async () => {
    setRequestStatus(RequestStatus.PENDING);
    try {
      const response = usersService.getToDo();
      const data: ToDoDTO[] = await response;
      setToDo(data.filter((toDo) => toDo.userId.toString() === id));
      setRequestStatus(RequestStatus.SUCCESS);
    } catch (error) {
      setRequestStatus(RequestStatus.ERROR);
    }
  };

  return {
    toDo,
    isToDoLoading: requestStatus === RequestStatus.PENDING,
    isError: requestStatus === RequestStatus.ERROR,
    getToDo,
  };
}
