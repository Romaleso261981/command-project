import { Flex, Image, Text } from "@mantine/core";
import { type FC, useState } from "react";

import BasketItemControl from "@/features/BasketItemControl/BasketItemControl";
import type { Product } from "@/pages/ShopPage/type";

import s from "./SingleCard.module.css";

type SingleCardProps = {
  data: Product;
};

export const SingleCard: FC<SingleCardProps> = ({ data }) => {
  const [quantity, setQuantity] = useState(0);

  const total = quantity * data.price;

  const toggleQvontity = (a: string, n: number) => {
    if (a === "plus") {
      setQuantity(quantity + n);
    } else {
      setQuantity(quantity - n);
    }
  };

  return (
    <Flex className={s.card}>
      <BasketItemControl quantity={quantity} toggleQuantity={toggleQvontity} />
      <Image src={data.imageURL} height={100} />
      <Flex direction='column' mr={100}>
        <Text>{`Cost ${data.price} $.`}</Text>
        <Text>{`quantity ${quantity} шт.`}</Text>
        <Text>{`Total cost ${total} $.`}</Text>
      </Flex>
    </Flex>
  );
};
