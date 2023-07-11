import React from 'react';
import './app.css';
import Search from '../Search/search.js';
import Filter from '../Filter/filter.js';
import Items from '../Items/items.js';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemOverview from '../ItemOverview/itemOverview.js';

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
        console.log(data);
        setItems(data);
      })
      .catch(error => console.error(error));
  }, []);

  console.log(userInput)

  return (
    <BrowserRouter>
      <div className="App">
        <h1>DJ</h1>
        <Search userInput={userInput} onChange={onChange} />
        <Filter />
        <Routes>
          <Route path="/" element={<Items items={items} />} />
          <Route path="/items/:id/overview" element={<ItemOverview items={items} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;