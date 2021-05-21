import React, { useState } from 'react';

interface InputComponentProps
{
    addListItem: (todo: string) => void;
}

const InputComponent: React.FC<InputComponentProps> = (props) =>
{
    const [input, setInput] = useState('');

    // input fields have an onChange event
    // that is called whenever the input
    // fields value is updated

    // Bind to the onChange event and
    // update the state with the new value
    // whenever its changes

    const handleInputUpdate = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        const newValue = e.target.value;
        setInput(newValue);
    }

    const inputInvalid = () =>
    {
        return (input === '');
    }

    const handleSubmit = () =>
    {
        props.addListItem(input);
        setInput('');
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) =>
    {
        if(e.charCode === 13)
        {
            handleSubmit();
        }
    }


    return(
        <section id="input-section">
            <input 
                type="text" 
                id="todo-input"
                value={input}
                onKeyPress={(e) => handleKeyDown(e)}
                onChange={(e) => handleInputUpdate(e)}
            ></input>
            <button
                onClick={() => handleSubmit()}
                disabled ={inputInvalid()}
            >submit</button>
        </section>
    );
}

export default InputComponent;