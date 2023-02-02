import React from 'react';
import styled from 'styled-components';

const StyledBackground = styled.div`
    /* Align  */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;


    height: 100%;
    width: 50%;

    /* FOREST */
    /* background-image: url(https://i.pinimg.com/originals/69/78/e3/6978e39aaa98547c707759226bc07dfc.jpg); */
    
    /* DOODLE */
    background-image: url(https://wallpaperaccess.com/full/3204572.jpg);
    
    /* BLUE NETWORK */
    /* background-image: url(https://pixelz.cc/wp-content/uploads/2019/03/polygons-network-blue-wqhd-1440p-wallpaper.jpg); */

    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0px;

    @media (max-width: 900px) {
        width: 30%;
    }

    @media (max-width: 600px) {
        display: none;
    }
`;

const StyledMessage = styled.div`
    padding: 20px;
    /* background-color: rgba(0, 0, 0, 1); */
    background-color: rgba(255, 255, 255, .2);
    border-radius: 30px;

    border: 1px solid red;

    h2, h4 {
        color: #4d8cf4;
    }
`;

const StyledContainer = styled.div`
    height: 100%;
    width: 100%;
    
    background: linear-gradient(to bottom, #0f1319, #24252a);

    margin-left: auto;
    /* padding: 0 5%; */
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    align-self: flex-end;

    h2 {
        display: block;

        color: #4d8cf4;
        margin-bottom: 20px;

        text-shadow: 0px 5px 10px rgba(81, 143, 246, .2);


        font-weight: bold;
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`;

const StyledMain = styled.div`
    max-width: 350px;
    width: 100%;

    padding: 20px 20px 20px 20px;

    display: flex;
    flex-direction: column;

    transform: translateY(-5vh);

    border-radius: 20px;
    /* background-color: rgba(0, 0, 0, .3); */
    /* background-color: rgba(255, 255, 255, .1); */
`;

export default function Base(props) {
    return (
        <>
            <StyledBackground>
                {/* <StyledMessage>
                    <h2>welcome to the Webgram</h2>
                    <h4>Be peaceful and enjoy :)</h4>
                </StyledMessage> */}
            </StyledBackground>

            <StyledContainer>
                <StyledMain>
                    {props.middle}
                </StyledMain>
            </StyledContainer>
        </>
    );
}
