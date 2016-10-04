import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { fetchRecipes} from './actions';
import ReduxPromise from 'redux-promise';


// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)
const store = createStore(rootReducer, applyMiddleware(ReduxPromise));


store.dispatch( fetchRecipes() ); //sets to new array, mapdispatchtoprops calls .dispatch on the action creator an

console.log(store.getState());

ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
    </Provider>,
  document.getElementById('root')
);
