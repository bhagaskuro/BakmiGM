//INI SEBENERNYA COMBINE REDUCER
// export default store;

// import { combineReducers } from "redux";

// import categoryReducer from "./categoryReducer";
// import cuisineReducer from "./cuisineReducer";
// import ingredientReducer from "./ingredientReducer";

// const rootReducers = combineReducers({
//   category: categoryReducer,
//   cuisine: cuisineReducer,
//   ingredient: ingredientReducer,
// });

// export default rootReducers;

import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

const initialState = {
  cuisines: [],
  cuisineDetail: {},
  access_token: "",
  categories: [],
  ingredients: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "fetchCuisines":
      return {
        ...state,
        cuisines: action.payload,
      };
    case "fetchCategories":
      return {
        ...state,
        categories: action.payload,
      };
    case "fetchIngredients":
      return {
        ...state,
        ingredients: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
