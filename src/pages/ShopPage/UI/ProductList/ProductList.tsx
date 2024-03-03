import { Box, Button, Center, Flex } from '@mantine/core';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from '@/shared/lib/hooks/useAppSelector';
import MessageDisplay from '@/shared/ui/MessageDisplay/MessageDisplay';

import type { Product } from '../../model/slise';
import ArticleCard from '../ProductItem/UI/ArticleCard/ArticleCard';
import { productsTotal, requestStatus } from './config/product';

type ProductListProps = {
  products: Product[];
  filteredProducts?: Product[];
};

const ProductList: FC<ProductListProps> = ({ products }) => {
  const { isLoading, isFetching } = useAppSelector((state) => state.producsSlise);

  const { t } = useTranslation();

  if (products.length === 0 && !isLoading) {
    return (
      <MessageDisplay
        description={requestStatus?.description || `${t('shop.noDescr')}`}
        message={requestStatus?.message || `${t('shop.noProducts')}`}
      />
    );
  }
  return (
    <Flex display={'flex'} direction={'column'}>
      <Flex display={Flex} wrap={'wrap'} gap={20} p={20}>
        {!isLoading &&
          products.map((product) => {
            return <ArticleCard key={product.id} product={product} />;
          })}
      </Flex>
      <Center>
        {!isFetching && products.length < productsTotal && (
          <Box className="d-flex-center padding-l">
            <Button disabled={isFetching} type="button">
              {isFetching ? 'Fetching Items...' : 'Show More Products'}
            </Button>
          </Box>
        )}
      </Center>
    </Flex>
  );
};

export default ProductList;
