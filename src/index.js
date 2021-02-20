import React from 'react'
import ReactDOM from 'react-dom'
import AddRecipe from './components/AddRecipe'

class RecipeApp extends React.Component {
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

const Header = () => (
    <h1>Recipes</h1>
)

const Recipes = (props) => (
    <div>
        {props.recipes.map((recipe, i) => <Recipe handleDeleteRecipe={props.handleDeleteRecipe} key={i} recipe={recipe} />)}
        <button onClick={props.handleDeleteRecipes}>Delete All Recipes</button>
    </div>
)

const Recipe = (props) => (
    <div>
        <p>{props.recipe}</p>
        <button 
            onClick={(() => {
                props.handleDeleteRecipe(props.recipe)
            })}
        >Delete
        </button>  
    </div>
)

ReactDOM.render(<RecipeApp />, document.getElementById('app'))