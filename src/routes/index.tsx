import { createBrowserRouter } from 'react-router-dom';

import { PrivateRoute } from './private';
import { PublicRoute } from './public';

import RecoveryPassword from '../pages/Login/RecoveryPassword';
import SignIn from '../pages/Login/SignIn';
import SignUp from '../pages/Login/SignUp';
import BudgetGoals from '../pages/Portal/BudgetGoals';
import GenericError from '../pages/Portal/GenericError';
import Home from '../pages/Portal/Home';
import NotFound from '../pages/Portal/NotFound';
import Profile from '../pages/Portal/Profile';

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
    path: '/recuperar-senha',
    element: (
      <PublicRoute>
        <RecoveryPassword />
      </PublicRoute>
    ),
  },
  {
    path: '/',
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: '/limite-gasto',
    element: (
      <PrivateRoute>
        <BudgetGoals />
      </PrivateRoute>
    ),
  },
  {
    path: '/meu-perfil',
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/404',
    element: <NotFound />,
  },
  {
    path: '/erro',
    element: <GenericError />,
  },
  {
    path: '/manutencao',
    element: <GenericError />,
  },
]);
