import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  // Below is basically what line 6 is without destructuring
  // const counterState = useState(1);
  // const counter = counterState[0];
  // const setCounter = counterstate[1];

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter >= 100 ? 0 : prevCounter + 10));
    }, 1);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/poop.js</code> and save to reload.
        </p>
        <p>Counter: {counter}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
  );
}

export default App;

//something funny
// hello!
// is this how we discuss changes to the app? 
// no that's usually done through pull requests
// ah that makes sense! 
