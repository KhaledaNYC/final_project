import React from 'react'
import * as actions from '../../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class RecipeCreate extends React.Component {
  constructor(props) {
    super(props)
    this.newRecipeHandler = this.newRecipeHandler.bind(this)
  }

  newRecipeHandler(event) {
    debugger;
    event.preventDefault()
    let ingredients = this.props.ingredients
    let checkedIngredients = ingredients.filter((ingredient) => this.refs[ingredient.id].checked )
    let idIngredients = checkedIngredients.map((ingredient) => (ingredient.id))

    const newRecipe = {
      name: this.refs.name.value,
      cuisine_type: this.refs.cuisine_type.value,
      cooking_time: this.refs.cooking_time.value,
      instructions: this.refs.instructions.value,
      description: this.refs.description.value,
      difficulty_level: this.refs.difficulty_level.value,
      // ingredient_ids: idIngredients
    }
    this.props.actions.addRecipe(newRecipe)
  }
  makeIngredients() {
  let ingredients = this.props.ingredients
  return ingredients.map((ingredient) => <div ref={`div${ingredient.id}`}> <label>{ingredient.name}</label><input type='checkbox' ref={`${ingredient.id}`}/> </div>)
}
  render() {
    return (

      <div>
        <form onSubmit={this.newRecipeHandler}>
          <input ref='name' placeholder="name" />
          <input ref='cuisine_type' placeholder="cuisine"/>
          <input ref='difficulty_level' placeholder="difficulty_level"/>
          <input ref='cooking_time' placeholder="cooking_time"/>
          <input ref='instructions' placeholder="instructions"/>
          <input ref='description' placeholder="description"/>
          <input type="submit" value="create new recipe"/>
        </form>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

// function mapStateToProps(state, ownProps) {
//   debugger
//   if (state.ingredients.length > 0) {
//     return {ingredients: state.ingredients}
//   }
//   else {
//     return {ingredients: {name: ''}}
//   }
// }

const componentCreator = connect(null, mapDispatchToProps) //allows components to connect to store
export default componentCreator(RecipeCreate); //access to store through props
