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

//   function addToCart() {
//     const updatedCartItems = ([...cartItems, selectedItem]);
//     setCartItems(updatedCartItems);
//     localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
//   }

function addToCart() {
    const existingCartItem = cartItems.find((item) => item._id === selectedItem._id);
  
    if (existingCartItem) {
      const updatedCartItems = cartItems.map((item) => {
        if (item._id === selectedItem._id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    } else {
      const updatedCartItem = { ...selectedItem, quantity: 1 };
      const updatedCartItems = [...cartItems, updatedCartItem];
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
  }


  useEffect(() => {
    console.log('Updated cart items:', cartItems);
  }, [cartItems]);

  

return (    
<div className='itemOverview'>
       <div className='main-image'>
             <button className='back-button' onClick={backClick}> &#8249; </button>
             <img className='item-img' src={itemImage[currentImageIndex].url} alt={selectedItem.title}/>
             <button className='next-button' onClick={handleClick}> &#8250; </button> 
          
       </div>
        <div className='item-details'>
        <p className='item-title'>{selectedItem.title}</p>
        <p className='item-price'>£{selectedItem.price}</p>
        </div>
        <button className='add-to-basket' onClick={addToCart}>Add to basket</button>
    <div className='image-grid'>
      {itemImage.map((image, index) => (
        <img
          key={index}
          className={`grid-image ${index === currentImageIndex ? 'selected' : ''}`}
          src={image.url}
          alt={selectedItem.title}
          onClick={() => setCurrentImageIndex(index)}
        />
      ))}
    </div>
 </div>
    );

}

export default ItemOverview;