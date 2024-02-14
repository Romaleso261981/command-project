import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { Spiner } from '@/shared/components/Loader/Loader';

export function AuthRoute({ redirectTo }: { redirectTo: string }) {
  const user = {};
  const loading = true;
  const location = useLocation();

  if (loading) {
    return <Spiner />;
  }

  return user ? <Outlet /> : <Navigate replace to={redirectTo} state={{ from: location }} />;
}
