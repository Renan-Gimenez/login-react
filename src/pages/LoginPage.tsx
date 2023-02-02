import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../style.css';

import config from "../config.json";

// ICONS
import { IoMdLock } from "react-icons/io";
import { HiUser } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

// COMPONENTES
import Input from "../Components/Input";
import Button from "../Components/Button";
import Title from "../Components/Title";

import 'firebase/auth';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { User } from 'firebase/auth';

import { auth } from '../services/firebase.ts';

export default function LoginPage() {
    // const [user, setUser] = useState(null);
    const [user, setUser] = useState<User>({} as User);
    // const [user, setUser] = useState<User | null>(null);


    function handleGoogleSignIn () {
        // const provider = new firebase.auth.GoogleAuthProvider();
        // firebase
        //     .auth()
        //     .signInWithPopup(provider)
        //     .then(result => {
        //         setUser(result.user);
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     })
                
                
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    
    return (
        <>
            <Title>Connect to your account and have fun ;)</Title>

            {/* <form action='https://formsubmit.co/renangiimenez@gmail.com' method="POST"> */}
            <form>
                <Input icon={<IoIosMail/>} id="email" name="Email" type="email" placeholder="Email"/>

                <Input icon={<IoMdLock/>} id="password" name="Password"  type="password" placeholder="Password"/>

                {/* <input type='hidden' name='_next' value='http://elgoog.tk'></input>
                <input type='hidden' name='_captcha' value='false'></input> */}

                <Button>Log In</Button>

                <div className="or-div">
                    <div className="barra"></div>
                    <span>or</span>
                    <div className="barra"></div>
                </div>

                <Button onClick={handleGoogleSignIn}><AiOutlineGoogle />Sign Up with Google</Button>
                {/* <Button onClick={handleGoogleSignIn}><AiOutlineTwitter />Sign Up with Twitter</Button>
                <Button onClick={handleGoogleSignIn}><AiFillApple />Sign Up with Apple</Button> */}
                <p className='span'>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </form>


            {/* <Link to="/">GO TO MENU</Link> */}
        </>
    );
}