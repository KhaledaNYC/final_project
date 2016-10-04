export function addRecipe(newRecipeFromForm) {
  const newRecipeFromApi = fetch('http://localhost:3000/api/v1/recipes', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({recipe: newRecipeFromForm})

  }).then(response=> {
    return response.json()
  }).then(newRecipePayload => {
    return newRecipePayload
  })

  return {type: 'ADD_RECIPE', payload: newRecipeFromApi}

}

export function fetchMenus(){
 const menus = fetch('http://localhost:3000/api/v1/menus').then(response => {
   return response.json()
 }).then(menusPayload => {
   return menusPayload
 })

 return {
   type: 'FETCH_MENUS',
   payload: menus
 }

}

export function fetchRecipes(){

 const recipes = fetch('http://localhost:3000/api/v1/recipes').then(response => {
   return response.json()
 }).then(recipesPayload => {
   return recipesPayload
 })

 return {
   type: 'FETCH_RECIPES',
   payload: recipes
 }

}

export function fetchIngredients(){

 const ingredients = fetch('http://localhost:3000/api/v1/ingredients').then(response => {
   return response.json()
 }).then(ingredientsPayload => {
   return ingredientsPayload
 })

 return {
   type: 'FETCH_INGREDIENTS',
   payload: ingredients
 }

}


export function addMenu(newMenuFromForm) {
  const newMenuFromApi = fetch('http://localhost:3000/api/v1/menus', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({menu: newMenuFromForm})

  }).then(response=> {
    return response.json()
  }).then(newMenuPayload => {
    return newMenuPayload
  })

  return {type: 'ADD_MENU', payload: newMenuFromApi}

}
