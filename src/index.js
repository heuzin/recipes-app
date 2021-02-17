import React from 'react'
import ReactDOM from 'react-dom'

class RecipeApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Recipes />
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
        return (
            <Recipe />
        )
    }
}

class Recipe extends React.Component {
    render() {
        return (
            <div>
                <p>Recipe Component</p>
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