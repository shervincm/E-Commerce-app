import React from "react";
import { useNavigate } from "react-router-dom";
import "./items.css";

function Items({ items, userInput, onChange, displayedItems, displayedClothingItems }) {
  const navigate = useNavigate();

  function handleClick(itemId) {
    const selectedItem = items.find((item) => item._id === itemId);
    localStorage.setItem("selectedItem", JSON.stringify(selectedItem));
    navigate(`/items/${itemId}/overview`);
  }

  return (
    <div className="listItems">
      <ul>
        {displayedClothingItems.map((item) => (
          <div key={item.id}>
            <li>
              {item.imageURL && item.imageURL[0] && (
                <img
                  className="img"
                  src={item.imageURL[0].url}
                  alt={item.title}
                  onClick={() => handleClick(item._id)}
                />
              )}
              {item.title} £{item.price}
            </li>
          </div>
        ))}
        {displayedItems.map((item) => (
          <div className='products' key={item.id}>
            <li>
              {item.imageURL && item.imageURL[0] && (
                <img
                  className="img"
                  src={item.imageURL[0].url}
                  alt={item.title}
                  onClick={() => handleClick(item._id)}
                />
              )}
              <div className="item-info">
                <p className="item-title">{item.title}</p>
                <p className="item-price">£{item.price}</p>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Items;