import type { Product } from "./slise";

export type ProductsTypes = {
  products: Product[];
  product: Product | null;
  basket: Array<Product>;
  status: boolean;
  isLoading: boolean;
  isFetching: boolean;
};
