import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home, NotFound, User, Users } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/users',
    element: <Users />,
  },
  {
    path: '/users/:id',
    element: <User />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
