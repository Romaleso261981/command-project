import { Button, Card, CardSection, Flex, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Rule } from "@/enteties/session/User/model/slice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import { DataBasePath } from "@/shared/types/enums";

import { getAllProducts } from "./model/slise";
import CardAddProduct from "./UI/CardAddProduct/CardAddProduct";
import ProductList from "./UI/ProductList/ProductList";

const ShopPage = () => {
  const [isShowCardAddProduct, setIsShowCardAddProduct] = useState(false);

  const isAdmin = Rule.ADMIN === useAppSelector((state) => state.curentUserSlice.rule);
  const shopData = useAppSelector((state) => state.producsSlise.products);

  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const toggleCardAddProduct = () => {
    setIsShowCardAddProduct(!isShowCardAddProduct);
  };

  const getAllData = async () => {
    dispatch(getAllProducts({ path: DataBasePath.Products, queryLimit: 12 }));
  };

  console.log("shopData", shopData);

  useEffect(() => {
    getAllData();
  }, []);
  return (
    <Card pt={50} pl={50} pos='relative'>
      {isShowCardAddProduct && <CardAddProduct toggleCardAddProduct={toggleCardAddProduct} />}
      <CardSection>
        <Flex display='flex' direction='row' pl={100} justify='flex-start'>
          {isAdmin && <Button onClick={toggleCardAddProduct}>{t("shop.addProd")}</Button>}
          <Title ml={300}>{t("shop.store")}</Title>
        </Flex>
        <ProductList products={shopData} />
      </CardSection>
    </Card>
  );
};

export default ShopPage;
