import { combineReducers } from "redux";

import {
  productReducer,
  searchReducer,
  typeReducer,
  brandReducer,
  ratingReducer,
  priceReducer,
  sortReducer,
  category0Reducer,
  category1Reducer,
  category2Reducer,
} from "./product/product.reducer";

export default combineReducers({
  products: productReducer,
  searchValue: searchReducer,
  typeValue: typeReducer,
  brandValue: brandReducer,
  ratingValue: ratingReducer,
  priceValue: priceReducer,
  sortValue: sortReducer,
  category0Value: category0Reducer,
  category1Value: category1Reducer,
  category2Value: category2Reducer,
});
