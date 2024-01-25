import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Spiner } from '@/shared/components/Loader/Loader';

// import { AuthRoute } from './auth-route';
import { Layout } from './layout';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const AuthPage = lazy(() => import('../pages/AuthPage/AuthPage'));
const AdminPage = lazy(() => import('../pages/AdminPage/AdminPage'));
const NotFound = lazy(() => import('../pages/Error-404/Error-404'));
const ProfilePage = lazy(() => import('../pages/ProfilePage/ProfilePage'));

export default function RootRouter() {
  return (
    <Suspense fallback={<Spiner />}>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/login" element={<AuthPage />} />
        {/*<Route element={<AuthRoute redirectTo="/login" />}> */}
        <Route element={<Layout />}>
          <Route path="admin" element={<AdminPage />} />
          <Route path="admin/:id" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* </Route> */}
      </Routes>
    </Suspense>
  );
}
