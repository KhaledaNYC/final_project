export default function recipesReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_RECIPES':
      return action.payload;
    case 'ADD_RECIPE':
      // 1. make a new copy of existing state (current list of cats) + our new cat
      return [...state, action.payload]
    default:
      return state;
  }
};
