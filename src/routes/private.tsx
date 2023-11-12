import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const hasToken = sessionStorage.getItem('@token');

  return hasToken ? <>{children}</> : <Navigate to="/login" />;
};
