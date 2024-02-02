import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Header } from './components/header/Header.component';
import { Home, NotFound, User, Users } from './pages';
import { NoUser } from './pages/noUser/NoUser.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Header>
        <Home />
      </Header>
    ),
    errorElement: (
      <Header>
        <NotFound />
      </Header>
    ),
  },
  {
    path: '/users',
    element: (
      <Header>
        <Users />
      </Header>
    ),
  },
  {
    path: '/users/:id',
    element: (
      <Header>
        <User />
      </Header>
    ),
    errorElement: (
      <Header>
        <NoUser />
      </Header>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
