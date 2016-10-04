import { combineReducers } from 'redux';
import recipesReducer from './recipes_reducer';
import menusReducer from './menus_reducer';

const rootReducer =  combineReducers({
  recipes: recipesReducer,
  menus: menusReducer
});

export default rootReducer;
