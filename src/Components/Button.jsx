import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
    height: 42px;
    width: 100%;
    max-width: 100%;
    font-size: 16px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 8px;

    box-shadow: 0px 5px 10px rgb(0 0 0 / 20%);
    


    margin: 20px 0;

    cursor: pointer;

    border: none;
    outline: none;

    background-color: rgb(81, 143, 246);
    color: white;

    transition: 200ms;
    box-shadow: 0px 5px 10px rgb(81 143 246 / 20%);

    :hover {
        letter-spacing: 1px;
    }

    gap: 10px;

    svg {
        fill: white;
    }
`;

const Button = (props) => {
    return(
        <>
            <StyledButton onClick={props.onClick}>{props.children}</StyledButton>
        </>
    );
}

export default Button;