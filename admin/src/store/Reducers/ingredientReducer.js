const initialState = {
  ingredients: [],
};

function ingredientReducer(state = initialState, action) {
  switch (action.type) {
    case "fetchIngredients":
      return {
        ...state,
        ingredients: action.payload,
      };
    default:
      return state;
  }
}

export default ingredientReducer;
