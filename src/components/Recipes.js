import React from 'react'
import Recipe from './Recipe'

const Recipes = (props) => (
    <div>
        {props.recipes.map((recipe, i) => <Recipe handleDeleteRecipe={props.handleDeleteRecipe} key={i} recipe={recipe} />)}
        <button onClick={props.handleDeleteRecipes}>Delete All Recipes</button>
    </div>
)

export default Recipes