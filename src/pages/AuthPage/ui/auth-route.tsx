import { Navigate, Outlet, useLocation } from 'react-router-dom';

export function AuthRoute({ redirectTo }: { redirectTo: string }) {
  const user = {};
  const location = useLocation();

  // if (loading) {
  //   return <Spiner />;
  // }

  return user ? <Outlet /> : <Navigate replace to={redirectTo} state={{ from: location }} />;
}
