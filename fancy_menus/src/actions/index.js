export function addRecipe(text){
  const recipe = [{ingredients: ["bechamel", "tomato", "lasagne", "mozzarella", "ricotta", "beef"], name: "lasagna", }]
  return {
    type: 'ADD_TODO',
    recipe
  }
}

export function fetchRecipes(){
  const recipes = [{id: 1, name: 'Hamburger'}, {id: 2, name: "Steak"}];

return {
  type: 'FETCH_RECIPES',
  payload: recipes
}
}
