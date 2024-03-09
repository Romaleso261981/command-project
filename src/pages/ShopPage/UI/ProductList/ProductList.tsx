import { Box, Button, Center, Flex } from "@mantine/core";
import { type FC, useState } from "react";
import { useTranslation } from "react-i18next";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import { DataBasePath } from "@/shared/types/enums";
import MessageDisplay from "@/shared/ui/MessageDisplay/MessageDisplay";

import { showMoreProducts } from "../../model/shopPageslise";
import type { Product, RequestStatus } from "../../type";
// import ProductItem from '../ProductItem/ProductItem';
import ArticleCard from "../ProductItem/UI/ArticleCard/ArticleCard";
import { productsTotal } from "./config/product";
import s from "./ProductList.module.css";

const requestStatus: RequestStatus = {
  message: "Вибачте але данного списку товарів не існує",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore eos vitae vel magni iusto doloribus assumenda mollitia dolores at nobis molestiae impedit rerum natus a, deserunt, earum sit voluptas? Doloremque rem cum, laudantium tempore veniam cupiditate aspernatur dolores aliquid corporis officiis, saepe quae. Accusantium doloremque, inventore laborum eius iste placeat!",
};

type ProductListProps = {
  products: Product[];
  filteredProducts?: Product[];
};

const ProductList: FC<ProductListProps> = ({ products }) => {
  const [isFetching, setIsFetching] = useState(true);

  const isLoading = useAppSelector((state) => state.producsSlise.isLoading);
  const lastRefKey = useAppSelector((state) => state.producsSlise.lastRefKey);

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  setTimeout(() => {
    setIsFetching(false);
  }, 1000);

  const onToggle = () => {};
  const showMore = () => {
    dispatch(showMoreProducts({ path: DataBasePath.Products, queryLimit: 6, lastRefKey }));
  };

  if (products.length === 0 && !isLoading) {
    return (
      <MessageDisplay
        action={onToggle}
        description={requestStatus?.description || `${t("shop.noDescr")}`}
        message={requestStatus?.message || `${t("shop.noProducts")}`}
      />
    );
  }
  return (
    <Flex display={"flex"} direction={"column"}>
      <Flex className={s.listWrapper}>
        {!isLoading &&
          products.map((product) => {
            return <ArticleCard key={product.id} product={product} />;
          })}
      </Flex>
      <Center>
        {!isFetching && products.length < productsTotal && (
          <Box className='d-flex-center padding-l'>
            <Button disabled={isFetching} onClick={showMore} type='button'>
              {isFetching ? "Fetching Items..." : "Show More Products"}
            </Button>
          </Box>
        )}
      </Center>
    </Flex>
  );
};

export default ProductList;
