import { combineReducers } from "redux";
import productsListReducer from "./Products/Products.reducer";

const rootReducer = combineReducers({
  products: productsListReducer,
});

export default rootReducer;
