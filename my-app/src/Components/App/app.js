import React, { useState, useEffect } from "react";
import "./app.css";
import Search from "../Search/search";
import Filter from "../Filter/filter";
import Items from "../Items/items";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemOverview from "../ItemOverview/itemOverview";
import CartButton from "../CartButton/cart";
import ShoppingCart from "../ShoppingCart/shopping";
import Home from "../Home/home";


function App() {
  // use state to store the user input
  const [userInput, setUserInput] = useState("");
  // use state to store the data from API
  const [items, setItems] = useState([]);
  // use state to store the selected filter for demographic
  const [selectedFilter, setSelectedFilter] = useState("Shop By");
  // use state to store the selected filter for item type
  const [selectedItemTypeFilter, setSelectedItemTypeFilter] = useState("Item");
  // use state to store the modal
  const [modal, setModal] = useState(false);

  // function to update the user input that is passed down to search component
  function onChange(e) {
    setUserInput(e.target.value);
  }

  // function to update the selected filter that is passed down to filter component
  function filterChange(filterValue) {
    setSelectedFilter(filterValue);
    setSelectedItemTypeFilter("Item");
  }

  // function to update the selected filter that is passed down to filter component for item type
  function itemTypeFilterChange(itemTypeFilterValue) {
    setSelectedItemTypeFilter(itemTypeFilterValue);
  }

  // fetch data from API
  useEffect(() => {
    fetch("hhttps://ecommerce-demo-sherv-61ac11c0fd58.herokuapp.com/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      })
      .catch((error) => console.error(error));
  }, []);

  // filter items based on the selected filter
  const filteredItems = items.filter((item) => {
    if (selectedFilter === "Shop By") {
      return true;
    } else {
      // Check if the selected filter is included in the demographic array
      return item.demographic.includes(selectedFilter);
    }
  }).filter((item) => {
    if (selectedItemTypeFilter === "Item") {
      return true;
    } else {
      return item.itemType === selectedItemTypeFilter;
    }
  });

  // filter items based on the user input
  const displayedItems = filteredItems.filter((item) => {
    return item.title.toLowerCase().includes(userInput.toLowerCase());
  }).filter((item) => {
    if (selectedItemTypeFilter === "Item") {
      return true;
    } else {
      return item.itemType === selectedItemTypeFilter;
    }
  });

  // filter clothing items based on the user input
  const displayedClothingItems = filteredItems.filter((item) => {
    return item.title.toLowerCase().includes(userInput.toLowerCase());
  }).filter((item) => {
    return item.itemType === "Clothing";
  });

  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);



  return (
    <BrowserRouter>
      <div className="app">
          <h1 className="title">Sherv Clothing</h1>
            <CartButton cartItems={cartItems} />
            <Home />
         <Routes>
         <Route path="/" element={[<Search onChange={onChange} userInput={userInput} />,
         <Filter filterChange={filterChange} itemTypeFilterChange={itemTypeFilterChange} />,
            <Items items={items} displayedItems={displayedItems} displayedClothingItems={displayedClothingItems} userInput={userInput} />]
          } />
            <Route path="/items/:itemId/overview" element={<ItemOverview setCartItems={setCartItems} cartItems={cartItems} modal={modal} setModal={setModal}/>} />
            <Route path="/cart" element={<ShoppingCart cartItems={cartItems} setCartItems={setCartItems}/>} />
         </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;