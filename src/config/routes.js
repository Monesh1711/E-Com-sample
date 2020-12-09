import views from "./views";

const HOME = {
    path: "/",
    component: views.ProductsList
};
const PRODUCT_LIST = {
    path: "/productslist",
    component: views.ProductsList
};
const PRODUCT_DETAILS = {
    path: "/detail",
    component: views.ProductDetail
};
const CART = {
    path: "/cart",
    component: views.Cart
};

const Routes = [CART, HOME, PRODUCT_LIST, PRODUCT_DETAILS];

export default Routes;
