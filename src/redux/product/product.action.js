import { getData } from "../../services/base_service";
import store from "../store";
export const setProducts = (products) => ({
  type: "SET_PRODUCTS",
  payload: products,
});
export const setSearchValue = (search) => ({
  type: "SET_SEARCH",
  payload: search,
});
export const setTypeValue = (type) => ({
  type: "SET_TYPE",
  payload: type,
});
export const setBrandValue = (brand) => ({
  type: "SET_BRAND",
  payload: brand,
});
export const setRatingValue = (rating) => ({
  type: "SET_RATING",
  payload: rating,
});
export const setPriceValue = (price) => ({
  type: "SET_PRICE",
  payload: price,
});
export const setSortValue = (sort) => ({
  type: "SET_SORT",
  payload: sort,
});
export const setCategoryLevel0 = (categoryLevel0) => ({
  type: "SET_CATEGORY_0",
  payload: categoryLevel0,
});
export const setCategoryLevel1 = (categoryLevel1) => ({
  type: "SET_CATEGORY_1",
  payload: categoryLevel1,
});
export const setCategoryLevel2 = (categoryLevel2) => ({
  type: "SET_CATEGORY_2",
  payload: categoryLevel2,
});

export const productsFetchData = () => {
  const state = store.getState();
  const search = state.searchValue;
  const sort = state.sortValue;
  const type = state.typeValue;
  const brand = state.brandValue;
  const rating = state.ratingValue;
  const price = state.priceValue;
  const category0 = state.category0Value;
  const category1 = state.category1Value;
  const category2 = state.category2Value;
  let field = "";
  sort ? (field = "price") : (field = "popularity");
  return (dispatch) => {
    getData(
      `products?_sort=${field}&_order=${sort}&q=${search}${type
        .map((value) => {
          return `&type=${value}`;
        })
        .join("")}${brand
        .map((value) => {
          return `&brand=${value}`;
        })
        .join("")}${rating ? `&rating=${rating}` : ""}${
        price.length
          ? `${
              price[1]
                ? `&price_gte=${+price[0]}&price_lte=${+price[1]}`
                : `&price_gte=${+price[0]}`
            }`
          : ""
      }${
        category2
          ? `&category_like=${category2}`
          : category1
          ? `&categories_like=${category1}`
          : category0
          ? `&categories_like=${category0}`
          : ""
      }`
    )
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => console.log(err));
  };
};

export const clearAllFiltersAction = () => {
  return (dispatch) => {
    dispatch(setSearchValue(""));
    dispatch(setTypeValue([]));
    dispatch(setBrandValue([]));
    dispatch(setRatingValue(""));
    dispatch(setPriceValue([]));
    dispatch(setSortValue(""));
    dispatch(setCategoryLevel0(""));
    dispatch(setCategoryLevel1(""));
    dispatch(setCategoryLevel2(""));
  };
};
