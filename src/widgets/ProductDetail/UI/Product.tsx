import { useEffect } from "react";
import { useParams } from "react-router";

import ProductDetail from "@/features/ProductDetail/ProductDetail";
import { getProductById } from "@/pages/ShopPage/model/shopPageslise";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { DataBasePath } from "@/shared/types/enums";
import { Header } from "@/widgets/Header";

const Product = () => {
  const { id } = useParams();
  const dispath = useAppDispatch();

  const getData = async () => {
    dispath(getProductById({ path: DataBasePath.Products, id: id! }));
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <>
      <Header />
      <ProductDetail />;
    </>
  );
};

export default Product;
