import { Box, Flex, Text, Title } from '@mantine/core';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IoClose } from 'react-icons/io5';

import { incomeTotal } from '@/shared/helpers/basket/totalCost';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector';

import s from './Basket.module.css';
import { setIsBasketShow } from './model/basketSlise';
import { SingleCard } from './UI/CardItem/CardItem';

const Basket: FC = () => {
  const orderedProduct = useAppSelector((state) => state.producsSlise.basket);

  const dispatch = useAppDispatch();

  const handleOpenBasket = async () => {
    dispatch(setIsBasketShow());
  };

  const { t } = useTranslation();

  if (orderedProduct.length <= 0) {
    return (
      <Flex className={s.basketEmpty}>
        <Title className={s.basketEmptyMsg}>{t('basket.basketEmpty')}</Title>
        <Box ml='auto' onClick={handleOpenBasket} className={s.close}>
          <IoClose />
        </Box>
      </Flex>
    );
  }

  return (
    <Flex className={s.card}>
      <Box ml='auto' onClick={handleOpenBasket} className={s.close}>
        <IoClose />
      </Box>
      {orderedProduct.map((item) => (
        <Flex key={item.id}>
          <SingleCard data={item} />
        </Flex>
      ))}
      <Flex>
        <Text>{`${t('basket.totalDue')} ${incomeTotal(orderedProduct).toLocaleString()} $.`}</Text>
      </Flex>
    </Flex>
  );
};

export default Basket;
