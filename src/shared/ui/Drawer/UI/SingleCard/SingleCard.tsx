import { Flex, Image, Text } from "@mantine/core";
import type { FC } from "react";

import type { Product } from "@/pages/ShopPage/type";

import s from "./SingleCard.module.css";

type SingleCardProps = {
  data: Product;
};

export const SingleCard: FC<SingleCardProps> = ({ data }) => {
  return (
    <Flex className={s.card}>
      <Image src={data.imageURL} height={100} />
      <Flex mr={100}>
        <Text>{`Cost ${data.price} $.`}</Text>
      </Flex>
    </Flex>
  );
};
