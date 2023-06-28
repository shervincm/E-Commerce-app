import React from 'react';
import './app.css';
import Search from '../Search/search.js';
import { useState } from 'react';

function App() {
const [userInput, setUserInput] = useState('')
const onChange = (e) => {
    setUserInput(e.target.value)
    }

    console.log(userInput)
  return (
    <div className="App">
      <h1>DJ</h1>
      <Search userInput={userInput} onChange={onChange}/>
    </div>
  );
}

export default App;