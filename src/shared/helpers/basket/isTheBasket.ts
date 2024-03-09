import type { Product } from "@/pages/ShopPage/type";

const isExistProductInBasket = (id: string, store: Product[]): boolean => {
  const isExist = store.some((item) => item.id === id);
  if (isExist) {
    return true;
  }
  return false;
};

export default isExistProductInBasket;
