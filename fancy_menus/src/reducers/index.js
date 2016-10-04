import { combineReducers } from 'redux';
import recipesReducer from './recipes_reducer';

const rootReducer =  combineReducers({
  recipes: recipesReducer
});

// {cats: whatever gets returned by cats reducer, dogs: whatever gets returned by dog reducer}

export default rootReducer;
