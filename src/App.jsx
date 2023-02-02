import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import firebase from './services/firebase.ts';
import './style.css';

import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';

// PAGES
import Page404 from './pages/Page404';
import Base from './pages/Base';
import LoginPage from './pages/LoginPage.tsx';
import SignupPage from './pages/SignupPage';
import MainPage from './pages/MainPage';

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  
  // const db = getFirestore(firebaseApp);
  // const useCollectionRef = collection(db, "users");

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(useCollectionRef);
  //     console.log(data);
  //   };
  //   getUsers();
  // },[]);

  console.log("render")

  return (
    <StyledApp>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<MainPage />} />
          <Route path='/login' element={<Base middle={<LoginPage />} />} />
          <Route path='/signup' element={<Base middle={<SignupPage />} />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </StyledApp>
  )
};
