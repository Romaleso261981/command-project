import { Group } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import {
  ColorSwitch,
  HeaderTitle,
  LanguagePicker,
  Messages,
  Notification,
  SearchHeader,
  ToggleMenu,
  UserInfo,
} from "@/features";
import { Basket } from "@/shared/ui/Drawer/Drawer";

import classes from "./Header.module.css";

export function Header() {
  const matches = useMediaQuery("(min-width: 1111px)");

  return (
    <Group className={classes.root}>
      <Group gap='xs' pl={40} pb={5} pt={5}>
        <HeaderTitle />
        {!matches && <Basket />}
      </Group>
      {!matches ? (
        <Group>
          <ToggleMenu />
        </Group>
      ) : (
        <Group gap='xs' justify='space-between'>
          <SearchHeader />
          {matches && <Basket />}
          <Messages />
          <Notification />
          <LanguagePicker type='collapsed' />
          <ColorSwitch />
          <UserInfo />
        </Group>
      )}
    </Group>
  );
}
