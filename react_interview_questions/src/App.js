import React from 'react';
import { AuthProvider, LoginPage } from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Polymorphism from './Question4';
import Question5 from './Question5';
import './App.css';

function App() {
  return (
    <>
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
      <Question2/>
      <Question3 />
      <Polymorphism />
      <Question5 name="Adio"/>
    </>
  )
}

export default App;
