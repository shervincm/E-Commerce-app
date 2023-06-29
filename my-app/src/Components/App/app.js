import React from 'react';
import './app.css';
import Search from '../Search/search.js';
import Filter from '../Filter/filter.js';
import Items from '../Items/items.js';
import { useState, useEffect } from 'react';

function App() {
const [userInput, setUserInput] = useState('')
const onChange = (e) => {
    setUserInput(e.target.value)
    }

const [items, setItems] = useState([])

useEffect(() => {
  fetch('http://localhost:4000/items')
    .then(response => response.json())
    .then(data => {
      console.log('Data from server:', data);
      setItems(data);
      console.log('Items state:', items);
    })
    .catch(error => console.error(error));
}, []);

  console.log(items)

    console.log(userInput)
  return (
    <div className="App">
      <h1>DJ</h1>
      <Search userInput={userInput} onChange={onChange}/>
      <Filter/>
      <Items items={items}/>
    </div>
  );
}

export default App;