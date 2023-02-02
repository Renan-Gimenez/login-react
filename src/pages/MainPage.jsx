import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { auth } from '../services/firebase.ts';

import config from "../config.json";

const StyledMainPage = styled.div`
    height: 100vh;
    width: 100vw;

    background: linear-gradient(to bottom, #0f1319, #24252a);
`;

const StyledHeader = styled.header`
    height: 64px;
    width: 100%;
    padding: 0 5%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    border-bottom: 1px solid #777;
`;

const StyledInfo = styled.div`
    padding-top: 64px;
    text-align: center;
`;

const StyledButton = styled.button`
    height: fit-content;
    width: fit-content;
    margin: 0;
    padding: 5px 20px;
    /* max-width: 120px; */
    text-decoration: none;

    cursor: pointer;

    border-radius: 50px;
    border: none;
    outline: none;

    background-color: rgb(81, 143, 246);
    color: white;

    transition: 200ms;
    box-shadow: 0px 5px 10px rgb(81 143 246 / 20%);

    /* :hover {
        letter-spacing: 1px;
    } */
`;

const StyledIcon = styled.img`
    height: 48px;
    border-radius: 100%;
`;

export default function MainPage(props) {
    return (
        <StyledMainPage>
            <StyledHeader>
                {/* <h2>Forum</h2> */}
                <StyledIcon src={props.scr} alt="user picture" />
                <StyledButton onClick={auth.signOut}>Sign Out</StyledButton>
            </StyledHeader>
            <StyledInfo>
                <h1>User's info:</h1>
                <span>----------</span>
                <p>Name: {config.username}</p>
                <p>Email: {config.email}</p>
                <p>Uid: {config.uid}</p>
            </StyledInfo>

            <Link to="/login">GO TO MENU</Link>
        </StyledMainPage>
    );
}