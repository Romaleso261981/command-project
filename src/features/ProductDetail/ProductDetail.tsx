import { AspectRatio, Button, Flex, Group, Image, Text, Title } from "@mantine/core";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { addToBasket, removeFromBasket } from "@/pages/ShopPage/model/shopPageslise";
import isExistProductInBasket from "@/shared/helpers/basket/isTheBasket";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";

import s from "./ProductDetail.module.css";

const ProductDetail = () => {
  const [isShowPicture, setIsShowPicture] = useState(false);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const product = useAppSelector((state) => state.producsSlise.product);
  const store = useAppSelector((state) => state.producsSlise.basket);

  let isExistInBascet = false;
  if (product && store) {
    isExistInBascet = isExistProductInBasket(product.id!, store);
  }

  const addProductToBasket = () => {
    if (product) dispatch(addToBasket(product));
  };

  const showPicture = () => {
    console.log("showPicture", isShowPicture);
    setIsShowPicture(!isShowPicture);
  };

  const removeProductFromBasket = () => {
    if (product) dispatch(removeFromBasket(product));
  };

  return (
    <>
      {isShowPicture ? (
        <AspectRatio
          className={s.aspectRatio}
          onClick={showPicture}
          ratio={1080 / 720}
          maw='60%'
          mx='auto'
        >
          <Image src={product?.imageURL} />
        </AspectRatio>
      ) : (
        <Flex className={s.cardWrapper}>
          <Flex className={s.descriptionWrapper}>
            <Flex display='flex' justify='space-between' direction={"row"}>
              <Flex
                className={s.descriptionWrapper}
                display='flex'
                justify='space-around'
                direction={"column"}
              >
                <Title className={s.title}>{product?.title}</Title>
                <Flex className={s.description}>
                  <Text>{product?.description}</Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex>
              <Group mt={50} gap={20}>
                {!isExistInBascet && (
                  <Button onClick={addProductToBasket}>{t("shop.inBascet")}</Button>
                )}
                {isExistInBascet && (
                  <Button onClick={removeProductFromBasket}>{t("shop.fromBascet")}</Button>
                )}
                <Button>{t("shop.оrder")}</Button>
              </Group>
            </Flex>
          </Flex>
          <Flex onClick={showPicture} className={s.imageWrapper}>
            <Image src={product?.imageURL} />
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default ProductDetail;
