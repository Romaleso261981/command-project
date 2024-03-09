import { Button, Flex, Group, Image, Text, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";

import { addToBasket, removeFromBasket } from "@/pages/ShopPage/model/slise";
import isExistProductInBasket from "@/shared/helpers/basket/isTheBasket";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";

import s from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const product = useAppSelector((state) => state.producsSlise.product);
  const store = useAppSelector((state) => state.producsSlise.basket);

  let isExistInBascet = false;
  if (product && store) {
    console.log(
      "isExistProductInBasket(product.id!, store)",
      isExistProductInBasket(product.id!, store),
    );
    isExistInBascet = isExistProductInBasket(product.id!, store);
  }

  const addProductToBasket = () => {
    if (product) dispatch(addToBasket(product));
  };

  const removeProductFromBasket = () => {
    if (product) dispatch(removeFromBasket(product));
  };

  return (
    <Flex className={s.cardWrapper}>
      <Flex className={s.descriptionWrapper}>
        <Flex display='flex' justify='space-between' direction='column'>
          <Flex display='flex' justify='space-between' direction='column'>
            <Title>{product?.title}</Title>
            <Flex w={700}>
              <Text>{product?.description}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex>
          <Group mt={50} gap={20}>
            {!isExistInBascet && <Button onClick={addProductToBasket}>{t("shop.inBascet")}</Button>}
            {isExistInBascet && (
              <Button onClick={removeProductFromBasket}>{t("shop.fromBascet")}</Button>
            )}
            <Button>{t("shop.оrder")}</Button>
          </Group>
        </Flex>
      </Flex>
      <Flex className={s.imageWrapper} w={550}>
        <Image src={product?.imageURL} />
      </Flex>
    </Flex>
  );
};

export default ProductDetail;
