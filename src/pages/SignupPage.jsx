import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import '../style.css';

// ICONS
import { IoMdLock } from "react-icons/io";
import { HiUser } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
import { MdCake } from "react-icons/md";

// COMPONENTES
import Input from "../Components/Input";
import Button from "../Components/Button";
import Title from "../Components/Title";
import Radio from '../Components/Radio';

// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth } from '../services/firebase';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 15px;

    border-radius: 8px;

    padding: 10px 15px 0px;
    background-color: #1f2329;
    color: #3e4247;
    
    box-shadow: 0px 5px 10px rgb(0 0 0 / 20%);
    
    p {
        display: inline-block;
        width: 100%;
        color: #3e4247;
    }
`;

const StyledRadios = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export default function SignupPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Title>Create your account</Title>

            {/* <form action='https://formsubmit.co/renangiimenez@gmail.com' method="POST"> */}
            <form action='/' method="/">
                <Input icon={<HiUser/>} id="username" name="Username" type="text" placeholder="Username" required />
                <Input onChange={(e) => setEmail(e.target.value)} icon={<IoIosMail/>} id="email" name="Email" type="email" placeholder="Email" required />

                <Input onChange={(e) => setPassword(e.target.value)} icon={<IoMdLock/>} id="password" name="Password"  type="password" placeholder="Password" required />
                <Input icon={<IoMdLock/>} id="password2" name="Password2"  type="password" placeholder="Confirm your password" required />

                <StyledDiv>
                    <p>Gender</p>
                    <StyledRadios>
                        <Radio id="male" name="Gender" span="Male" />
                        <Radio id="female" name="Gender" span="Female" />
                        <Radio id="other" name="Gender" span="Other" />
                    </StyledRadios>
                </StyledDiv>

                <Input icon={<MdCake/>} id="birthday" name="Birthday" type="date" required />
                {/* <input type="date" /> */}

                {/* <input type='hidden' name='_next' value='http://elgoog.tk'></input>
                <input type='hidden' name='_captcha' value='false'></input> */}

                <Button>Sign Up</Button>

                <p className='span'>Already have an account? <Link to="/login">Log In</Link></p>
            </form>

            {/* <Link to="/">GO TO MENU</Link> */}
        </>
    );
}