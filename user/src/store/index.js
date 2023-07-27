import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

const initialState = {
  cuisines: [],
  cuisineDetail: null,
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "fetchCuisines":
      return {
        ...state,
        cuisines: action.payload,
      };
    case "fetchCuisine":
      return {
        ...state,
        cuisineDetail: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
