import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { Spiner } from '@/shared/components/Loader/Loader';

import { useAuth } from '../data-access';

export function AuthRoute({ redirectTo }: { redirectTo: string }) {
  const { loading, user } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Spiner />;
  }

  return user ? <Outlet /> : <Navigate replace to={redirectTo} state={{ from: location }} />;
}
