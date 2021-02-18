import React from 'react'
import ReactDOM from 'react-dom'

class RecipeApp extends React.Component {
    constructor(props) {
        super(props)
        this.handlAddRecipe = this.handlAddRecipe.bind(this)
        this.handleDeleteRecipes = this.handleDeleteRecipes.bind(this)
        this.handleDeleteRecipe = this.handleDeleteRecipe.bind(this)
        this.state = {
            recipes: ['one', 'two', 'three']
        }
    }
    handlAddRecipe(recipe) {
        if (!recipe) {
            return 'Please enter a recipe!'
        } else if (this.state.recipes.indexOf(recipe) > -1) {
            return 'Recipe already in the list!'
        }

        this.setState((prevState) => ({
            recipes: prevState.recipes.concat(recipe)
        }))
    }
    handleDeleteRecipes() {
        this.setState(() => ({
            recipes: []
        }))
    }
    handleDeleteRecipe(recipeToDelete) {
        this.setState((prevState) => ({
            recipes: prevState.recipes.filter((recipe) => recipeToDelete !== recipe)
        }))
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

class AddRecipe extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: undefined
        }
        this.handlAddRecipe = this.handlAddRecipe.bind(this)
    }
    handlAddRecipe(e) {
        e.preventDefault()

        const recipe = e.target.elements.recipe.value.trim()
        const error = this.props.handlAddRecipe(recipe)


        this.setState(() => ({
            error
        }))
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handlAddRecipe}>
                    <input type='text' name='recipe'></input>
                    <button>Add Recipe</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<RecipeApp />, document.getElementById('app'))