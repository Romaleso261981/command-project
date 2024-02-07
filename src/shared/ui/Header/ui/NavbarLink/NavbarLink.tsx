import { rem, Tooltip, UnstyledButton } from '@mantine/core';
import type { IconHome2 } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  path: string;
  active?: boolean;
  onClick?(): void;
}

export const NavbarLink = ({ icon: Icon, label, active, onClick, path }: NavbarLinkProps) => {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Link to={path}>
          <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
        </Link>
      </UnstyledButton>
    </Tooltip>
  );
};
