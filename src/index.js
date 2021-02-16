import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Recipe App</h1>
            </div>
        )
    }
}

class Recipes extends React.Component {
    render() {
        return (
            <div>
                <p>Here are your recipes</p>
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

const jsx = (
    <div>    
        <Header />
        <Recipes />
        <AddRecipe />
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'))