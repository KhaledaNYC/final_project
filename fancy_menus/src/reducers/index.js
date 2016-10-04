import { combineReducers } from 'redux';
import recipesReducer from './recipes_reducer';
import menusReducer from './menus_reducer';
import ingredientsReducer from './ingredients_reducer';

const rootReducer =  combineReducers({
  menus: menusReducer,
  recipes: recipesReducer,
  ingredients: ingredientsReducer
});

export default rootReducer;
