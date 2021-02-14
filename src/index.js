import ReactDOM from 'react-dom'

const recipes = []

const onFormSubmit = (e) => {
    e.preventDefault()
    
    const recipe = e.target.elements.recipes.value

    if (recipe) {
        recipes.push(recipe)
        e.target.elements.recipes.value = ''
        renderRecipeApp()
    }
}

const appRoot = document.getElementById('app')

const renderRecipeApp = () => {
    const template = (
        <div>
            <h1>Recipe App</h1>
            <p>{recipes.length}</p>
            <ol>
                <li>Pizza</li>
                <li>Lasanha</li>
                <li>Pasta</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='recipes'/>
                <button>Add Recipe</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot)
}

renderRecipeApp()