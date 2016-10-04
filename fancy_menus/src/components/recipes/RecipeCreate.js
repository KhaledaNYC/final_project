import React from 'react'
import * as actions from '../../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class RecipeNew extends React.Component {
  constructor(props) {
    super(props)
    this.newRecipeHandler = this.newRecipeHandler.bind(this)
  }

  newRecipeHandler(event) {
    event.preventDefault()
    let ingredients = this.props.ingredients
    let checkedIngredients = ingredients.filter((ingredient) => this.refs[ingredient.id].checked )
    let idIngredients = checkedIngredients.map((ingredient) => (ingredient.id))
    // const newCatName = event.target.children[1].value
    // const newCatName = this.refs.input.value
    const newRecipe = {
      name: this.refs.name.value,
      breed: this.refs.breed.value,
      weight: this.refs.weight.value,
      tempermanet: this.refs.temp.value,
      ingredient_ids: idIngredients
    }
    this.props.actions.addRecipe(newRecipe)
  }
  makeIngredients() {
  let ingredients = this.props.ingredients
  return ingredients.map((ingredient) => <div ref={`div${ingredient.id}`}> <label>{ingredient.name}</label><input type='checkbox' ref={`${ingredient.id}`}/> </div>)
}
  render() {
    return (
      // {recipe: {name: 'default', cuisine: 'default', level_of_difficulty : '1', cooking_time: ') minutes', ingredients: ["none"]}}
      <div>
        <form onSubmit={this.newRecipeHandler}>
          <input ref='name' placeholder="name" />
          <input ref='cuisine' placeholder="cuisine"/>
          <input ref='level_of_difficulty' placeholder="cuisine"/>
          <input ref='cooking_time' placeholder="cooking_time"/>
        </form>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

function mapStateToProps(state, ownProps) {
  if (state.ingredients.length > 0) {
    return {ingredients: state.ingredients}
  }
  else {
    return {ingredients: {name: ''}}
  }
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps) //allows components to connect to store
export default componentCreator(RecipeNew); //access to store through props
