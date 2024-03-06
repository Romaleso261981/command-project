import type { Product } from '../type';

export type ProductsTypes = {
  products: Product[];
  product: Product | null;
  basket: Array<Product>;
  status: boolean;
  lastRefKey: number;
  total: number;
  isLoading: boolean;
  isFetching: boolean;
};
