import React from 'react'

const Recipe = (props) => (
    <div>
        <p>{props.recipe}</p>
        <button 
            onClick={(() => {
                props.handleDeleteRecipe(props.recipe)
            })}
        >Delete
        </button>  
    </div>
)

export default Recipe