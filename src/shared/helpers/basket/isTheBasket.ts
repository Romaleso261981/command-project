import type { Product } from "@/pages/ShopPage/model/slise";

const isExistProductInBasket = (id: string, store: Product[]): boolean => {
  console.log("store", store);
  const isExist = store.find((item) => item.id === id);
  if (isExist) {
    return true;
  }
  return false;
};

export default isExistProductInBasket;
