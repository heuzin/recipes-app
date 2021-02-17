import React from 'react'
import ReactDOM from 'react-dom'

class RecipeApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: ['one', 'two', 'three']
        }
    }
    render() {
        return (
            <div>
                <Header />
                <Recipes recipes={this.state.recipes} />
                <AddRecipe />
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
    render() {
        return (
            <div>
                <p>Add recipe here</p>
            </div>
        )
    }
}

ReactDOM.render(<RecipeApp />, document.getElementById('app'))