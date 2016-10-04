import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/App'
import MenusIndex from './components/menus/MenusIndex'
import MenuCreate from './components/menus/MenuCreate'
import MenuShow from './components/menus/MenuShow'
import RecipeIndex from './components/recipes/RecipeIndex'
import RecipeCreate from './components/recipes/RecipeCreate'
import FeaturedFoods from './components/FeaturedFoods'
import RecipeShow from './components/recipes/RecipeShow'




export default(
  <Route path='/' component={App}>
    <IndexRoute component={FeaturedFoods}/>
      <Route path='/menus' component={MenusIndex}/>
      <Route path='/recipes' component={RecipeIndex}/>
      <Route path='/recipes/new' component={RecipeCreate}/>
      <Route path='/recipes/:id' component={RecipeShow}/>
      <Route path='/menus/new' component={MenuCreate} />
      <Route path='/menus/:id' component={MenuShow} />
    </Route>

)
