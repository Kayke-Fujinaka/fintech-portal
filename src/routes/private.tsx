import { Navigate } from 'react-router-dom';

import { IRouteProps } from '../interfaces/routes';
import Layout from '../layout';

export const PrivateRoute = ({ children }: IRouteProps) => {
  const hasToken = sessionStorage.getItem('@token');

  return hasToken ? <Layout>{children}</Layout> : <Navigate to="/login" />;
};
