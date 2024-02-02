import { Group, Stack } from '@mantine/core';
import {
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconHome2,
  IconLogin,
  IconLogout,
  IconSettings
} from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

import { RoutersPaths } from '@/shared/types/enums';

import { NavbarLink } from '../NavbarLink/NavbarLink';
import classes from './Navbar.module.css';

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className={classes.navbar}>
      <Stack justify="space-between" h={550} gap={20}>
        <Group>
          <NavbarLink path={RoutersPaths.LOGIN} icon={IconLogin} label={t('auth.login')} />
          <NavbarLink path={RoutersPaths.MAIN} icon={IconHome2} label={t('navBar.home')} />
          <NavbarLink
            path={RoutersPaths.ADMIN}
            icon={IconDeviceDesktopAnalytics}
            label={t('navBar.admin')}
          />
          <NavbarLink path={RoutersPaths.MAIN} icon={IconFingerprint} label={t('navBar.profile')} />
        </Group>
        <Group>
          <NavbarLink path={RoutersPaths.MAIN} icon={IconSettings} label="Settings" />
          <NavbarLink path={RoutersPaths.MAIN} icon={IconLogout} label="Logout" />
        </Group>
      </Stack>
    </nav>
  );
};
