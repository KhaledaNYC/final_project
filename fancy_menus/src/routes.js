import React from 'react'
import {Route} from 'react-router'
import App from './components/App'
import MenuIndex from './components/menus/MenuIndex'
import MenuCreate from './components/menus/MenuCreate'
import MenuShow from './components/menus/MenuShow'

import RecipeIndex from './components/recipes/RecipeIndex'
import RecipeCreate from './components/recipes/RecipeCreate'
import RecipeShow from './components/recipes/RecipeShow'




export default(
  <Route path='/' component={App}>
    <Route path='/menus' component={MenuIndex}/>
    <Route path='/recipes' component={RecipeIndex}/>
    <Route path='/recipes/new' component={RecipeCreate}/>
    <Route path='/recipes/:id' component={RecipeShow}/>
      <Route path='/menus/new' component={MenuCreate} />
      <Route path='/menus/:id' component={MenuShow} />
    </Route>
  </Route>
)
