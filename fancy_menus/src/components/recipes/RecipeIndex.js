import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router'


function RecipesIndex (props) {
  return (
  <div>
    <Link to="/recipes/new">Add a recipe</Link>
    <ul>
      {props.recipes.map(recipe => <Link to={`/recipes/${recipe.id}`}><li key={recipe.id}>{recipe.name}</li></Link>)}
    </ul>
    {props.children}
  </div>)
};

function mapStateToProps(state){
  return {
    recipes: state.recipes
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(RecipesIndex);
