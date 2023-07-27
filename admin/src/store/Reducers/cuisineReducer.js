const initialState = {
  cuisines: [],
  cuisine: null,
  cuisineDetail: {},
};

function cuisineReducer(state = initialState, action) {
  switch (action.type) {
    case "fetchCuisines":
      return {
        ...state,
        cuisines: action.payload,
      };
    case "fetchCuisine":
      return {
        ...state,
        cuisine: action.payload,
      };
    default:
      return state;
  }
}

export default cuisineReducer;
