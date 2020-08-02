import React from 'react';
//import "./Button.css"

function Button({props, children}){
   
    return(
        <button className="Button" onChange={props.handleSort}>
            {children}
        </button>
    )
}
export default Button;