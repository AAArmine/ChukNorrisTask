export const listReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      return [
        ...state,
        {
          id: action.joke.id,
          value: action.joke.value,
        }];
    case "REMOVE_JOKE":
      return state.filter((joke) => joke.id !== action.joke.id);
    default:
      return state;
  }
};
