import type { Product } from "@/pages/ShopPage/type";

export const incomeTotal = (arr: Product[]) => {
  if (!arr || arr?.length === 0) return 0;

  return arr.reduce((acc, val) => acc + val.price, 0).toFixed(2);
};
