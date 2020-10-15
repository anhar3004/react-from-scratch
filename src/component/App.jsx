import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'

function App(){
    
const [inputValue, setInputValue] = useState ('')
const color = 'red'

function handleOnButtonClick(){
    console.log('click')
}

function onInputChange(e){
    setInputValue(e.target.value)
}


    return (
        <div>
            App : {inputValue}
            <br/>
            <Input 
            onInputChange={onInputChange}
            />
            <br/>
            <Button
            color={color}
            handleOnButtonClick={handleOnButtonClick} />
        </div>
    )  
}

export default App