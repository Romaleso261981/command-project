import { Box, Drawer, Flex, Title } from "@mantine/core";
import { type FC } from "react";
import { useTranslation } from "react-i18next";
import { IoClose } from "react-icons/io5";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";

import s from "./Basket.module.css";
import { setIsBasketShow } from "./model/basketSlise";
import { SingleCard } from "./UI/CardItem/CardItem";

const Basket: FC = () => {
  const orderedProduct = useAppSelector((state) => state.producsSlise.basket);
  const opened = useAppSelector((state) => state.basket.isBasketShow);

  const dispatch = useAppDispatch();

  const handleOpenBasket = async () => {
    dispatch(setIsBasketShow());
  };

  const { t } = useTranslation();

  return (
    <Drawer opened={opened} onClose={handleOpenBasket} title='Register' padding='xl' size='xl'>
      <Box ml='auto' onClick={handleOpenBasket} className={s.close}>
        <IoClose />
      </Box>
      {orderedProduct.map((item) => (
        <Flex key={item.id}>
          <SingleCard data={item} />
        </Flex>
      ))}
      {/* <Flex>
        <Text>{`${t("basket.totalDue")} ${incomeTotal(orderedProduct).toLocaleString()} $.`}</Text>
      </Flex> */}
      :
      <Flex className={s.basketEmpty}>
        <Title className={s.basketEmptyMsg}>{t("basket.basketEmpty")}</Title>
        <Box ml='auto' onClick={handleOpenBasket} className={s.close}>
          <IoClose />
        </Box>
      </Flex>
    </Drawer>
  );
};

export default Basket;
