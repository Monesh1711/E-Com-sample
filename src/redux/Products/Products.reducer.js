import * as Actions from "./Products.type";

const initialState = {
  productList: [],
  product: [],
};

const productsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LIST_PRODUCTS:
      const productList = action.payload.map((event) => ({
        ...event,
        id: event.id,
        title: event.title,
        price: event.price,
        description: event.description,
        category: event.category,
        image: event.image,
      }));
      return {
        ...state,
        productList,
      };

    case Actions.GET_PRODUCT_BY_ID:
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};

export default productsListReducer;
