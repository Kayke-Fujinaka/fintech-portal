import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const hasToken = sessionStorage.getItem('@token');

  return hasToken ? <>{children}</> : <Navigate to="/login" />;
};
