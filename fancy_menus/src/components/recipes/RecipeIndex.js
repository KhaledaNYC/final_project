import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router'

var styles = {
  menuSquare: {
    width: '30%',
    paddingBottom: '30%',
    borderColor: 'red',
    borderWidth: "1px",
    backgroundColor: 'pink',
    display: 'inline-block',
    float: 'left',
    margin: '1%'
  },
  list: {
    position: 'absolute',
    fontWeight: '700',
    paddingTop: '10%',
    paddingLeft: '5%',
    // // top: '50%',
    // // left: '0',
    // // transform: 'translate(-50%,-50%)',
    textAlign: 'center'
  }
}


function RecipesIndex (props) {

  return (
  <div>
      <Link to="/recipes/new">Add a recipe</Link>
    <h1>Recipe</h1>
      {props.recipes.map(recipe => <Link to={`/recipes/${recipe.id}`}>
        <div style={styles.menuSquare}>
          <div style={styles.list} key={recipe.id}>{recipe.name}</div>
        </div>
        </Link>)}
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
