import { Box, Button, Flex, Image } from "@mantine/core";
import type { FC } from "react";

import s from "./Basket.module.css";
import { orderedProduct } from "./mockData";

type BasketProps = {
  onShow: () => void;
};

const Basket: FC<BasketProps> = ({ onShow }) => {
  return (
    <Flex className={s.basketWrapper} direction="column" justify="space-around" align="flex-start">
      <Flex display="flex" gap={10} p={20} direction="column">
        <Box pos="absolute" right={10}>
          <Button onClick={onShow}>X</Button>
        </Box>
        {orderedProduct.map((item) => {
          return (
            <Flex display="flex" justify="space-evenly" direction="row" key={item.id}>
              <Flex mr={200}>
                <Image width={100} h={100} src={item.image} />
              </Flex>
            </Flex>
          );
        })}
      </Flex>
      <Flex direction="row" display="flex" justify="space-around" align="baseline">
        <Button>Clear Basket</Button>
        <Button>Clear Basket</Button>
      </Flex>
    </Flex>
  );
};

export default Basket;
