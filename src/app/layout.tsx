import { AppShell } from '@mantine/core';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Basket from '@/features/Basket/Basket';
import { Header } from '@/features/Header/Header';
import { Navbar } from '@/features/Navbar/Navbar';

import styles from './App.module.css';

export function Layout() {
  const [isShowBasket, setIsShowBasket] = useState(false);

  const toggleShowBasket = () => {
    setIsShowBasket(!isShowBasket);
  };
  return (
    <AppShell header={{ height: 100 }} navbar={{ width: 80, breakpoint: 'sm' }}>
      <AppShell.Header className={styles.header}>
        <Header toggleShowBasket={toggleShowBasket} />
      </AppShell.Header>
      <AppShell.Navbar className={styles.navbar}>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main className={styles.main}>
        {isShowBasket && <Basket onShow={toggleShowBasket} />}
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
