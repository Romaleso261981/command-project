import { Group, Stack } from '@mantine/core';
import {
  IconBuildingStore,
  IconCalendarClock,
  IconDeviceGamepad2,
  IconHome2,
  IconLogout,
  IconSettings,
  IconUser,
  IconUsers
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
          <NavbarLink path={RoutersPaths.MAIN} icon={IconHome2} label={t('navBar.home')} />
          <NavbarLink
            path={RoutersPaths.LOGIN}
            icon={IconDeviceGamepad2}
            label={t('navBar.game')}
          />
          <NavbarLink
            path={RoutersPaths.MAIN}
            icon={IconCalendarClock}
            label={t('navBar.schedule')}
          />
          <NavbarLink path={RoutersPaths.MAIN} icon={IconBuildingStore} label={t('navBar.store')} />
          <NavbarLink path={RoutersPaths.MAIN} icon={IconUser} label={t('navBar.user')} />
          <NavbarLink path={RoutersPaths.ADMIN} icon={IconUsers} label={t('navBar.users')} />
        </Group>
        <Group>
          <NavbarLink path={RoutersPaths.MAIN} icon={IconSettings} label={t('navBar.settings')} />
          <NavbarLink path={RoutersPaths.MAIN} icon={IconLogout} label={t('navBar.logout')} />
        </Group>
      </Stack>
    </nav>
  );
};
