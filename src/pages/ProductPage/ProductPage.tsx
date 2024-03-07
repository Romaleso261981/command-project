import { useEffect } from "react";
import { useParams } from "react-router";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { DataBasePath } from "@/shared/types/enums";

import { getProductById } from "../ShopPage/model/slise";
import ProductDetail from "./UI/ProductDetail/ProductDetail";
const ProductPage = () => {
  const { id } = useParams();
  const dispath = useAppDispatch();

  const getData = async () => {
    dispath(getProductById({ path: DataBasePath.Products, id: id! }));
  };

  useEffect(() => {
    getData();
  }, [id]);

  return <ProductDetail />;
};

export default ProductPage;
