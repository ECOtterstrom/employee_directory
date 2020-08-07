import React from 'react';

const InputField = (props) => {

    return (
        
        <div>
            Search: <input type='search' onChange={props.handleChange}></input>
        </div>
    )
}

export default InputField;  