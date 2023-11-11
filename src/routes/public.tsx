import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }: { children: ReactNode }) => {
  const hasToken = sessionStorage.getItem('@token');

  if (!hasToken) return children;

  return <Navigate to="/investimentos" />;
};
