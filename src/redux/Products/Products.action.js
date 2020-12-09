import { LIST_PRODUCTS, GET_PRODUCT_BY_ID, ADD_TO_CART } from "./Products.type";

// export const buyCake = (number = 1) => {
//   console.log("called");
//   return {
//     type: BUY_CAKE,
//     payload: number,
//   };
// };

// import { LIST_PRODUCTS } from "./Products.type";
import axios from "axios";
import baseUrl from "../../utils/api";

export const getProducts = () => {
  let request = axios.get(`${baseUrl}/products`);
  return (dispatch) => {
    request.then((response) =>
      // console.log("response", response)
      dispatch({
        type: LIST_PRODUCTS,
        payload: response.data,
      })
    );
  };
};

export const getProductsByCategory = (categoryName) => {
  let request = axios.get(`${baseUrl}/products/category/${categoryName}`);
  return (dispatch) =>
    request.then((response) =>
      // console.log("response", response)
      dispatch({
        type: LIST_PRODUCTS,
        payload: response.data,
      })
    );
};

export const getProductById = (id) => {
  let request = axios.get(`${baseUrl}/products/${id}`);
  return (dispatch) => {
    request.then((response) =>
      // console.log("response", response)
      dispatch({
        type: GET_PRODUCT_BY_ID,
        payload: response.data,
      })
    );
  };
};

export const addToCart = (payload) => {
  let request = axios.post(`${baseUrl}/carts`, {
    payload,
  });
  console.log("add to cart1", payload);
  return (dispatch) => {
    console.log("add to cart2", payload);
    request.then((response) =>
      // console.log("response", response)
      // dispatch({
      //   type: ADD_TO_CART,
      //   // payload: response.data,
      // })
      Promise.all([
        dispatch({
          type: ADD_TO_CART,
        }),
      ]).then(() => alert("added to cart"))
    );
  };
};
