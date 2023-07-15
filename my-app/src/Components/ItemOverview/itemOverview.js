import './itemOverview.css';
import { useState, useEffect } from 'react';

function ItemOverview({items, setCartItems, cartItems}) {

    const selectedItem = JSON.parse(localStorage.getItem("selectedItem"));
    console.log(selectedItem);
    const itemImage = selectedItem.imageURL;
    console.log(itemImage);
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  function handleClick() {
    if (currentImageIndex < itemImage.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  }

  function backClick() {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
    console.log(currentImageIndex);
  }

  function addToCart() {
    setCartItems([...cartItems, selectedItem]);
  }

  useEffect(() => {
    console.log('Updated cart items:', cartItems);
  }, [cartItems]);

  

return (    
    <div className='itemOverview'>
        <button onClick={backClick}> &#8249; </button>
        <img className='item-img' src={itemImage[currentImageIndex].url} alt={selectedItem.title}/>
        <button onClick={handleClick}> &#8250; </button> 
        <p className='item-title'>{selectedItem.title}</p>
        <p className='item-price'>£{selectedItem.price}</p>
        <button className='add-to-basket' onClick={addToCart}>Add to basket</button>
    </div>
)

}

export default ItemOverview;