import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component {
    render () {
        return (
            <div>
                <h1>Recipe App</h1>
            </div>
        )
    }
}

const jsx = (
    <div>    
        <Header />
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'))