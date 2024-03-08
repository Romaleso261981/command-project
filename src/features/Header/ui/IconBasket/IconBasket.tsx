import { Flex } from '@mantine/core';
import { SlBasketLoaded } from 'react-icons/sl';

import Badge from '@/features/Basket/UI/Badge/Badge';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector';

import s from './IconBasket.module.css';

type IconBasket = {
  toggleShowBasket(): void;
};

export const IconBasket = ({ toggleShowBasket }: IconBasket) => {
  const store = useAppSelector((state) => state.producsSlise.basket);

  return (
    <Flex className={s.iconWrapper} onClick={toggleShowBasket}>
      <Badge count={store.length}>
        <SlBasketLoaded size={27} />
      </Badge>
    </Flex>
  );
};
