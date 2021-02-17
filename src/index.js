import React from 'react'
import ReactDOM from 'react-dom'

class RecipeApp extends React.Component {
    constructor(props) {
        super(props)
        this.handlAddRecipe = this.handlAddRecipe.bind(this)
        this.state = {
            recipes: ['one', 'two', 'three']
        }
    }
    handlAddRecipe(recipe) {
        this.setState((prevState) => {
            return {            
                recipes: prevState.recipes.concat(recipe)
            }
        })
    }
    render() {
        return (
            <div>
                <Header />
                <Recipes 
                    recipes={this.state.recipes} 
                />
                <AddRecipe
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
            this.props.recipes.map((recipe, i) => <Recipe key={i} recipe={recipe} />)
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
        this.handlAddRecipe = this.handlAddRecipe.bind(this)
    }
    handlAddRecipe(e) {
        e.preventDefault()

        console.log(e.target.elements.recipe.value)
        const recipe = e.target.elements.recipe.value

        this.props.handlAddRecipe(recipe)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handlAddRecipe}>
                    <input type='text' name='recipe'></input>
                    <button>Add Recipe</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<RecipeApp />, document.getElementById('app'))