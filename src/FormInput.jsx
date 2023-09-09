import React from 'react';
import './FormInput.css'

const formInput = (props) => {
    return ( 
        <div className="form">
            <label >{props.label}</label>
            <input type="text" placeholder={props.placeholder} />
           
        </div>
     );
}
 
export default formInput;