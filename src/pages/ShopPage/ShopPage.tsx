import { Button, Card, CardSection, Flex, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Role } from '@/enteties/session/User/model/slice';
import { Header } from '@/features/Header/Header';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector';
import { DataBasePath } from '@/shared/types/enums';

import { getAllProducts } from './model/slise';
import CardAddProduct from './UI/CardAddProduct/CardAddProduct';
import ProductList from './UI/ProductList/ProductList';

const ShopPage = () => {
  const [isShowCardAddProduct, setIsShowCardAddProduct] = useState(false);

  const isAdmin = Role.ADMIN === useAppSelector((state) => state.curentUserSlice.rule);
  const shopData = useAppSelector((state) => state.producsSlise.products);
  const lastRefKey = useAppSelector((state) => state.producsSlise.lastRefKey);

  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const toggleCardAddProduct = () => {
    setIsShowCardAddProduct(!isShowCardAddProduct);
  };

  const getAllData = async () => {
    dispatch(getAllProducts({ path: DataBasePath.Products, queryLimit: 6, lastRefKey }));
  };

  useEffect(() => {
    getAllData();
  }, []);
  return (
    <>
      <Header />
      <Card pt={50} pl={50} pos='relative'>
        {isShowCardAddProduct && <CardAddProduct toggleCardAddProduct={toggleCardAddProduct} />}
        <CardSection>
          <Flex display='flex' direction='row' ml='auto' mr='auto' justify='flex-start'>
            {isAdmin && <Button onClick={toggleCardAddProduct}>{t('shop.addProd')}</Button>}
            <Title ml='auto' mr='auto'>
              {t('shop.store')}
            </Title>
          </Flex>
          <ProductList products={shopData} />
        </CardSection>
      </Card>
    </>
  );
};

export default ShopPage;
