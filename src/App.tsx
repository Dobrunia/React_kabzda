import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      App component
      <Rating/>
      <Accordion/>
    </div>
    
  );
}

function Rating() {
  return (
    <div>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
    </div>
    
  );
}

function Accordion() {
  return (
  <div>
    <ul>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul>
  </div>
  );
}

function Star() {
  return (
    <div>star</div>
  );
}

export default App;
