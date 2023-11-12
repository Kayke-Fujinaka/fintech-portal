import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const hasToken = sessionStorage.getItem('@token');

  return !hasToken ? <>{children}</> : <Navigate to="/investimentos" />;
};
