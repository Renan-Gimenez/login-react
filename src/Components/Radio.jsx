import React from "react";
import styled from "styled-components";

const StyledLabel = styled.div`
    height: 42px;

    display: flex;
    align-items: center;

    span {
        margin-left: 5px;
    }
`;

export default function Radio(props) {
    return(
        <StyledLabel>
            <label htmlFor={props.id}>
                <input id={props.id} type='radio' name={props.name} value={props.id} />
                <span style={{color: "#3e4247"}}>{props.span}</span>
            </label>
        </StyledLabel>
    );
}