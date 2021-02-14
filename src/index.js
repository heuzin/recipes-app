import ReactDOM from 'react-dom'

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

const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)