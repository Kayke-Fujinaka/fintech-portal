import { Navigate } from 'react-router-dom';

import { IRouteProps } from '../interfaces/routes';

export const PrivateRoute = ({ children }: IRouteProps) => {
  const hasToken = sessionStorage.getItem('@token');

  return hasToken ? <>{children}</> : <Navigate to="/login" />;
};
