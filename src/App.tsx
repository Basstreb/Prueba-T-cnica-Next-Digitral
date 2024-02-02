import { useEffect, useState } from 'react';

import { usersService } from './services/Users.services';

function App() {
  const [users, setUsers] = useState<any>();

  useEffect(() => {
    usersService.getUsers().then((res) => {
      setUsers(res);
    });
  }, []);

  return (
    <>
      <h1>Users</h1>
      <ul>{users?.map((user: any) => <li key={user.id}>{user.name}</li>)}</ul>
    </>
  );
}

export default App;
