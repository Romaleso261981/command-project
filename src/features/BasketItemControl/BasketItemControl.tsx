// import { useDispatch } from "react-redux";
import { Button, Flex } from "@mantine/core";
import type { FC } from "react";
import { FaMinus } from "react-icons/fa";
import { GoPlus } from "react-icons/go";

import s from "./BasketItemControl.module.css";

type Props = {
  quantity: number;
  toggleQuantity: (a: string, n: number) => void;
};

const BasketItemControl: FC<Props> = ({ quantity, toggleQuantity }) => {
  // const dispatch = useDispatch();

  const product = {
    maxQuantity: 5,
  };

  const onAddQty = () => {
    if (quantity < product.maxQuantity) {
      toggleQuantity("plus", 1);
      console.log("dispatch(addQtyItem(product.id));");
      // dispatch(addQtyItem(product.id));
    }
  };

  const onMinusQty = () => {
    if (product.maxQuantity >= quantity && quantity !== 0) {
      toggleQuantity("minus", 1);
      console.log("dispatch(minusQtyItem(product.id));");
      // dispatch(minusQtyItem(product.id));
    }
  };

  return (
    <Flex className={s.basketItemControl}>
      <Button
        className={s.basketControlAdd}
        disabled={product.maxQuantity === quantity}
        onClick={onAddQty}
        type='button'
      >
        <GoPlus />
      </Button>
      <Button
        className={s.basketControlMinus}
        disabled={quantity === 1}
        onClick={onMinusQty}
        type='button'
      >
        <FaMinus />
      </Button>
    </Flex>
  );
};

// BasketItemControl.propTypes = {
//   product: PropType.shape({
//     id: PropType.string,
//     name: PropType.string,
//     brand: PropType.string,
//     price: PropType.number,
//     quantity: PropType.number,
//     maxQuantity: PropType.number,
//     description: PropType.string,
//     keywords: PropType.arrayOf(PropType.string),
//     selectedSize: PropType.string,
//     selectedColor: PropType.string,
//     imageCollection: PropType.arrayOf(PropType.string),
//     sizes: PropType.arrayOf(PropType.number),
//     image: PropType.string,
//     imageUrl: PropType.string,
//     isFeatured: PropType.bool,
//     isRecommended: PropType.bool,
//     availableColors: PropType.arrayOf(PropType.string),
//   }).isRequired,
// };

export default BasketItemControl;
