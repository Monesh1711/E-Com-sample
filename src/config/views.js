import { lazy } from "react";

const Cart = lazy(() => import("../pages/cart/cart"));
const ProductsList = lazy(() => import("../pages/Products/ProductsList"));
const ProductDetail = lazy(() =>
  import("../pages/ProductDetails/ProductDetail")
);

const componentView = {
  Cart,
  ProductsList,
  ProductDetail,
};

export default componentView;
