import { createBrowserRouter } from 'react-router-dom';

import { PrivateRoute } from './private';
import { PublicRoute } from './public';

import SignIn from '../pages/Login/SignIn';
import SignUp from '../pages/Login/SignUp';
import Dashboard from '../pages/Portal/Dashboard';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <PublicRoute>
        <SignIn />
      </PublicRoute>
    ),
  },
  {
    path: '/registro',
    element: (
      <PublicRoute>
        <SignUp />
      </PublicRoute>
    ),
  },
  {
    path: '/',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
]);
