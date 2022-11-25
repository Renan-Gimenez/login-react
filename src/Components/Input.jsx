import React from 'react'


const Input = (props) => {
    return(
        <>
            <label>
                {props.icon}
                <input id={props.id} name={props.name} type={props.type} placeholder={props.placeholder} autoComplete="off" required />
            </label>
        </>
    );
}

export default Input;