import ReactDOM from 'react-dom'

const appRoot = document.getElementById('app')

const renderRecipeApp = () => {
    const template = (
        <div>
            <h1>Recipe App</h1>
            <ol>
                <li>Pizza</li>
                <li>Lasanha</li>
                <li>Pasta</li>
            </ol>
        </div>
    );

    ReactDOM.render(template, appRoot)
}

renderRecipeApp()