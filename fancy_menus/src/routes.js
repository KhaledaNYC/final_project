import React from 'react'
import {Route} from 'react-router'
import App from './components/App'
import MenuIndex from './components/menus/MenuIndex'


export default(
  <Route path='/' component={App}>
    <Route path='/menus' component={MenuIndex}/>
  </Route>
)
