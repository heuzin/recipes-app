import React from 'react'

export default class AddRecipe extends React.Component {
    state = {
        error: undefined
    }
    handlAddRecipe = (e) => {
        e.preventDefault()

        const recipe = e.target.elements.recipe.value.trim()
        const error = this.props.handlAddRecipe(recipe)


        this.setState(() => ({
            error
        }))

        if (!error) {
            e.target.elements.recipe.value = ''
        }
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