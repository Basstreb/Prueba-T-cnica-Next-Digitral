import { useState } from 'react';

import { RequestStatus } from '../../enums/RequestStatus.enum';
import { usersService } from '../../services/Users.services';
import { UsersDTO } from './Users.dto';

export const useGetUsers = () => {
  const [users, setUsers] = useState<UsersDTO[]>([]);
  const [requestStatus, setRequestStatus] = useState(RequestStatus.IDLE);

  const getUsers = async () => {
    setRequestStatus(RequestStatus.PENDING);
    try {
      const response = usersService.getUsers();
      const data = await response;
      setUsers(data);
      setRequestStatus(RequestStatus.SUCCESS);
    } catch (error) {
      setRequestStatus(RequestStatus.ERROR);
    }
  };

  return {
    users,
    isLoading: requestStatus === RequestStatus.PENDING,
    isError: requestStatus === RequestStatus.ERROR,
    getUsers,
  };
}
