import { Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import { setIsBasketShow } from '../Basket/model/basketSlise';
import classes from './Header.module.css';
import {
  ColorSwitch,
  HeaderTitle,
  LanguagePicker,
  Messages,
  Notification,
  Search,
  UserInfo,
} from './ui';
import { IconBasket } from './ui/IconBasket/IconBasket';
import { ToggleMenu } from './ui/ToggleMenu/ToggleMenu';

export function Header() {
  const matches = useMediaQuery('(min-width: 56.25em)');

  const dispatch = useAppDispatch();

  const handleOpenBasket = async () => {
    dispatch(setIsBasketShow());
  };

  return (
    <Group className={classes.root}>
      <Group gap='xs' pl={40} pb={5} pt={5}>
        <HeaderTitle />
        <IconBasket toggleShowBasket={handleOpenBasket} />
      </Group>
      {!matches ? (
        <Group>
          <ToggleMenu />
        </Group>
      ) : (
        <Group gap='xs' justify='space-between'>
          <Search />
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
