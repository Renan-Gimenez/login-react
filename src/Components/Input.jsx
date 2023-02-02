import React from 'react'
import styled from 'styled-components';

const StyledInput = styled.input`
    background: none;
    border: none;

    color: rgb(62, 66, 71);
    padding: 0 10px;

    font-size: 16px;

    outline: none;

    height: 42px;
    width: 100%;

    ::placeholder {
        color: #3e4247;
    }
`;

const StyledLabel = styled.label`
    height: 42px;
    max-width: 100%;

    width: 100%;
    font-size: 16px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 8px;

    margin-bottom: 15px;
    padding: 0 0 0 10px;
    
    background-color: #1f2329;
    color: #3e4247;

    box-shadow: 0px 5px 10px rgb(0 0 0 / 20%);
`;

const Input = (props) => {
    return(
        <>
            <StyledLabel>
                {props.icon}
                <StyledInput onChange={props.onChange} id={props.id} name={props.name} type={props.type} placeholder={props.placeholder} autoComplete="off" required />
            </StyledLabel>
        </>
    );
}

export default Input;