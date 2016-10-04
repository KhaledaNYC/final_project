import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import ReduxPromise from 'redux-promise';
import {fetchMenus, fetchRecipes } from './actions'

const store = createStore(rootReducer, applyMiddleware(ReduxPromise));

store.dispatch( fetchMenus() );
store.dispatch( fetchRecipes() );

console.log(store.getState());

ReactDOM.render(

  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
    </Provider>,

  document.getElementById('root')
);
