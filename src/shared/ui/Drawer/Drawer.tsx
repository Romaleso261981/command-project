import { Drawer, Flex, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useTranslation } from "react-i18next";

import { IconBasket } from "@/features/IconBasket/IconBasket";
import { incomeTotal } from "@/shared/helpers/basket/totalCost";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";

import s from "./Basket.module.css";
import { SingleCard } from "./UI/SingleCard/SingleCard";

export function Basket() {
  const [opened, { open, close }] = useDisclosure(false);

  const orderedProduct = useAppSelector((state) => state.producsSlise.basket);

  const { t } = useTranslation();

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        position='right'
        size='xl'
        transitionProps={{ transition: "pop-top-right", duration: 150, timingFunction: "linear" }}
      >
        {orderedProduct.length > 0 ? (
          <Flex direction='column' justify='space-between'>
            {orderedProduct.map((item) => (
              <Flex key={item.id}>
                <SingleCard data={item} />
              </Flex>
            ))}
            <Flex direction='row' justify='flex-start'>
              <Text>{`${t("basket.totalDue")} ${incomeTotal(orderedProduct).toLocaleString()} $.`}</Text>
            </Flex>
          </Flex>
        ) : (
          <Flex className={s.basketEmpty}>
            <Title className={s.basketEmptyMsg}>{t("basket.basketEmpty")}</Title>
          </Flex>
        )}
      </Drawer>
      <IconBasket toggleShowBasket={open} />
    </>
  );
}
