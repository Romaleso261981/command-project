import { Group, rem, Stack, Tooltip, UnstyledButton } from '@mantine/core';
import {
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconHome2,
  IconLogin,
  IconLogout,
  IconSettings
} from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  path: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick, path }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Link to={path}>
          <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
        </Link>
      </UnstyledButton>
    </Tooltip>
  );
}

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className={classes.navbar}>
      <Stack justify="space-between" h={550} gap={20}>
        <Group>
          <NavbarLink path="/login" icon={IconLogin} label={t('auth.login')} />
          <NavbarLink path="/" icon={IconHome2} label={t('navBar.home')} />
          <NavbarLink path="/admin" icon={IconDeviceDesktopAnalytics} label={t('navBar.admin')} />
          <NavbarLink path="/" icon={IconFingerprint} label={t('navBar.profile')} />
        </Group>
        <Group>
          <NavbarLink path="/" icon={IconSettings} label="Settings" />
          <NavbarLink path="/" icon={IconLogout} label="Logout" />
        </Group>
      </Stack>
    </nav>
  );
};
