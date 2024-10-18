import './App.css';
import Buttons from './Buttons.js';
import React, {useEffect} from 'react';

function App() {
  useEffect(() =>
    {
      const introBox = document.getElementById('intro_box');
      if(introBox)
      {
        setTimeout(() =>
        {
          introBox.classList.add('active');
        }, 100);
      }
    }, []);
    
  return (
    <div id="intro_box">
      <h1>hello! <br />i'm belinda 妙琪</h1>
      <p>welcome to my personal website!</p>
      <p>here are some quick links below :)</p>
      <Buttons />
    </div>
  );
}

export default App;
