import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';

import Basket from '@/features/Basket/Basket';
import { Header } from '@/features/Header/Header';
import { Navbar } from '@/features/Navbar/Navbar';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector';

import styles from './App.module.css';

export function Layout() {
  const isShowBasket = useAppSelector((state) => state.basket.isBasketShow);

  return (
    <AppShell header={{ height: 100 }} navbar={{ width: 80, breakpoint: 'sm' }}>
      <AppShell.Header className={styles.header}>
        {isShowBasket && <Basket />}
        <Header />
      </AppShell.Header>
      <AppShell.Navbar className={styles.navbar}>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main className={styles.main}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
