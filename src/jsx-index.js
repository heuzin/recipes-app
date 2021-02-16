import ReactDOM from 'react-dom'

let recipes = ['pizza', 'lasanha', 'pasta']

const onFormSubmit = (e) => {
    e.preventDefault()
    
    const recipe = e.target.elements.recipes.value

    if (recipe) {
        recipes.push(recipe)
        e.target.elements.recipes.value = ''
        renderRecipeApp()
    }
}

const onRemoveAll = () => {
    recipes = []
    renderRecipeApp()
}

const appRoot = document.getElementById('app')

const renderRecipeApp = () => {
    const template = (
        <div>
            <h1>Recipe App</h1>
            <p>{recipes.length}</p>
            <p>{recipes.length > 0 ? 'Here are your recipes:' : 'No recipes to show'}</p>
            <ol>
                {recipes.map((recipe, i) => <li key={i}>{recipe}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='recipes'/>
                <button>Add Recipe</button>
            </form>
            <button onClick={onRemoveAll}>Remove All</button>
        </div>
    );

    ReactDOM.render(template, appRoot)
}

renderRecipeApp()