import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion';

function App() {
  return (
    <div>
      <AddTitle/>
      <Rating/>
      <Accordion/>
    </div>
    
  );
}

function Rating() {
  return (
    <>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
    </>
    
  );
}

function Star() {
  return <div>star</div>;
}

function AddTitle() {
  return <>This is APP component</>;
}

export default App;
