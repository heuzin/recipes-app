import React from 'react'
import ReactDOM from 'react-dom'

class RecipeApp extends React.Component {
    constructor(props) {
        super(props)
        this.handlAddRecipe = this.handlAddRecipe.bind(this)
        this.handleDeleteRecipes = this.handleDeleteRecipes.bind(this)
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

        this.setState((prevState) => {
            return {            
                recipes: prevState.recipes.concat(recipe)
            }
        })
    }
    handleDeleteRecipes() {
        this.setState(() => {
            return {
                recipes: []
            }
        })
    }
    render() {
        return (
            <div>
                <Header />
                <Recipes 
                    recipes={this.state.recipes} 
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

class Header extends React.Component {
    render() {
        
        return (
            <h1>Recipes</h1>
        )
    }
}

class Recipes extends React.Component {
    render() {
        console.log(this.props.recipes)
        return (
            <div>
                {this.props.recipes.map((recipe, i) => <Recipe key={i} recipe={recipe} />)}
                <button onClick={this.props.handleDeleteRecipes}>Delete All Recipes</button>
            </div>
        )
    }
}

class Recipe extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.recipe}</p>
            </div>
        )
    }
}

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

        this.setState((prevState) => {
            return { error }
        }) 
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