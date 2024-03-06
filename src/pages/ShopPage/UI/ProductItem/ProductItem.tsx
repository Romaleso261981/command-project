import { Box, Button, Flex, Image, Text, Title } from '@mantine/core';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import type { Product } from '../../type';
import s from './ProductItem.module.css';

type ProductItemProps = {
  product: Product;
};

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onClickItem = () => {
    if (!product) return;

    if (product.id) {
      navigate(`/products/${product.id}`);
    }
  };

  return (
    <Flex className={s.cardWrapper}>
      <Flex display='flex' direction='column' onClick={onClickItem}>
        <Box w='100%' h='50%'>
          <Image src={product.imageURL} alt={product.title} />
        </Box>
        <Flex className={s.descriptionWrapper}>
          <Title className={s.title}>{product.title}</Title>
          <Flex>
            <Title c='indigo' size={35} mr={10}>
              {t('shop.brand')}
            </Title>
            <Title className={s.brandTitle}>{product.brand}</Title>
          </Flex>
          <Text className={s.description}>{product.description}</Text>
          <Text className={s.price}>{`${t('shop.cost')} ${product.price} ${t('shop.union')}`}</Text>
        </Flex>
      </Flex>
      <Flex mt={15} gap={20} pb={10}>
        <Button>{t('shop.inBascet')}</Button>
        <Button>{t('shop.оrder')}</Button>
      </Flex>
    </Flex>
  );
};

export default ProductItem;
