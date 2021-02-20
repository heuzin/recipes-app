import React from 'react'
import AddRecipe from './AddRecipe'
import Recipes from './Recipes'
import Header from './Header'

export default class RecipeApp extends React.Component {
    state = {
        recipes: []
    }
    handlAddRecipe = (recipe) => {
        if (!recipe) {
            return 'Please enter a recipe!'
        } else if (this.state.recipes.indexOf(recipe) > -1) {
            return 'Recipe already in the list!'
        }

        this.setState((prevState) => ({
            recipes: prevState.recipes.concat(recipe)
        }))
    }
    handleDeleteRecipes = () => {
        this.setState(() => ({
            recipes: []
        }))
    }
    handleDeleteRecipe = (recipeToDelete) => {
        this.setState((prevState) => ({
            recipes: prevState.recipes.filter((recipe) => recipeToDelete !== recipe)
        }))
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('recipes')
            const recipes = JSON.parse(json)
            
            if (recipes) {
                this.setState(() => ({ recipes }))
            }
        } catch {
            // Do nothing
        }
    }
    componentDidUpdate(prevPros, prevState) {
        if (prevState.recipes.length !== this.state.recipes.length) {
            const json = JSON.stringify(this.state.recipes)
            localStorage.setItem('recipes', json)
        }
    }
    render() {
        return (
            <div>
                <Header />
                <Recipes 
                    recipes={this.state.recipes} 
                    handleDeleteRecipe={this.handleDeleteRecipe}
                    handleDeleteRecipes={this.handleDeleteRecipes}
                />
                <AddRecipe
                    recipes={this.state.recipes}
                    handlAddRecipe={this.handlAddRecipe}
                />
            </div>
        )
    }
}