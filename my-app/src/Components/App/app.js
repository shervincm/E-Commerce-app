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

  // use state to store the selected filter
  const [selectedFilter, setSelectedFilter] = useState('Shop By');

  // function to update the selected filter that is passed down to filter component
  function filterChange (filterValue) {
    setSelectedFilter(filterValue);
  }

  // filter items based on the selected filter
  const filteredItems = items.filter((item) => {
    if (selectedFilter === 'Shop By') {
      return true;
    } else {
      return item.demographic === selectedFilter;
    }
  });

  // filter items based on the user input
  const displayedItems = filteredItems.filter((item) => {
    return item.title.toLowerCase().includes(userInput.toLowerCase());
  });

  

  console.log(userInput)

  return (
    <BrowserRouter>
      <div className="App">
        <h1>DJ</h1>
        <Search userInput={userInput} onChange={onChange} />
        <Filter filterChange={filterChange}/>
        <Routes>
          <Route path="/" element={<Items items={items} userInput={userInput} onChange={onChange} displayedItems={displayedItems} />} />
          <Route path="/items/:id/overview" element={<ItemOverview items={items} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;