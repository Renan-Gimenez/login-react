import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledPage404 = styled.div`
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: linear-gradient(to bottom, #0f1319, #24252a);
`;

export default function Page404() {
    return (
        <StyledPage404>
            <h1>404 Error</h1><br/>
            <h3>This page could not be found!</h3>
            <p>Back to <Link to="/login" >Main Page</Link></p>
        </StyledPage404>
    );
}