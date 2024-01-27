import { Burger, Group } from '@mantine/core';

import classes from './Header.module.css';
import { ColorSwitch } from './ui/components/ColorSwitch/ColorSwitch';
import { HeaderTitle } from './ui/components/HeaderTitle/HeaderTitle';
import LanguagePicker from './ui/components/LanguagePicker/LanguagePicker';
import Messages from './ui/components/Messages/Messages';
import Notification from './ui/components/Notification/Notification';
import Search from './ui/components/Search/Search';
import { UserInfo } from './ui/components/UserInfo/UserInfo';

export type HeaderProps = {
  navbarExpanded: boolean;
  toggleNavbar(): void;
};

export function Header() {
  return (
    <Group className={classes.root}>
      <Group gap="xs" pl={40} pb={5} pt={5}>
        <Burger aria-label="Show menu" hiddenFrom="sm" size="sm" />
        <HeaderTitle />
      </Group>
      <Group gap="xs" justify="space-between">
        <Search />
        <Messages />
        <Notification />
        <LanguagePicker type="collapsed" />
        <ColorSwitch />
        <UserInfo />
      </Group>
    </Group>
  );
}
