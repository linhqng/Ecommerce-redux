const INITIAL_STATE = {
  products: [],
};
export const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export const searchReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return action.payload;

    default:
      return state;
  }
};
export const typeReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_TYPE":
      return action.payload;

    default:
      return state;
  }
};
export const brandReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_BRAND":
      return action.payload;

    default:
      return state;
  }
};
export const ratingReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_RATING":
      return action.payload;

    default:
      return state;
  }
};
export const priceReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_PRICE":
      return action.payload;

    default:
      return state;
  }
};
export const sortReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_SORT":
      return action.payload;

    default:
      return state;
  }
};
export const category0Reducer = (state = "", action) => {
  switch (action.type) {
    case "SET_CATEGORY_0":
      return action.payload;

    default:
      return state;
  }
};
export const category1Reducer = (state = "", action) => {
  switch (action.type) {
    case "SET_CATEGORY_1":
      return action.payload;

    default:
      return state;
  }
};
export const category2Reducer = (state = "", action) => {
  switch (action.type) {
    case "SET_CATEGORY_2":
      return action.payload;

    default:
      return state;
  }
};
