import React from 'react'

function Input(props){
    return (
        <input
            type="text"
            onChange={props.onInputChange}
        />
    )
}

export default Input
