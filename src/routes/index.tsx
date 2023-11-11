import { createBrowserRouter } from 'react-router-dom';

import SignIn from '../pages/Login/SignIn';
import SignUp from '../pages/Login/SignUp';
import Dashboard from '../pages/Portal/Dashboard';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <div>
        <SignIn />
      </div>
    ),
  },
  {
    path: '/registro',
    element: (
      <div>
        <SignUp />
      </div>
    ),
  },
  {
    path: '/',
    element: (
      <div>
        <Dashboard />
      </div>
    ),
  },
]);
