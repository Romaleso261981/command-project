import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';

import { Header } from '@/shared/components/Header/Header';
import { Navbar } from '@/shared/components/Header/ui/components/Navbar/Navbar';

import styles from './Layout.module.css';

export function Layout() {
  return (
    <AppShell header={{ height: 60 }} navbar={{ width: 260, breakpoint: 'sm' }}>
      <AppShell.Header className={styles.header}>
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
