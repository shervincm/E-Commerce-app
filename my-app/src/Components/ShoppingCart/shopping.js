import './shopping.css' 

function ShoppingCart ({cartItems, setCartItems, }) {

    function handleDelete(id) {
    const updatedCartItems = cartItems.filter((item) => {
        return item._id !== id;
    })
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));}

    function itemDecrease(id) {
        const updatedCartItems = cartItems.map((item) => {
          if (item._id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      }
    
      function itemIncrease(id) {
        const updatedCartItems = cartItems.map((item) => {
          if (item._id === id && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      }

      const totalPrice = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
        }, 0);

        function renderMessage() {
          if (cartItems.length === 0) {
            return <p>Your shopping cart is empty!</p>;
          } else if (totalPrice === 0) {
            return <p>Your cart is currently empty!</p>;
          } else {
            return <p className='shoppingCart-total'>Total Price: £{totalPrice}</p>;
          }
        }

    return (
        <div>
            <ul className='shoppingCart-list'>
                {cartItems.map((item) => {
                    const quantityMessage = item.quantity === 1 ? "Quantity X 1" : `Quantity X ${item.quantity} `;
                    return (
                        <li className='shoppingCart-item' key={item.id}>
                            <img className='shoppingCart-img' src={item.imageURL[0].url} alt={item.title} />
                            <p className='shoppingCart-text'>{item.title}</p>
                            <button className='shoppingButton-decrease' onClick={() => itemIncrease(item._id)}>-</button>
                            <p className='shoppingCart-quantity'>{quantityMessage}</p>
                            <button className='shoppingButton-increase' onClick={() => itemDecrease(item._id)}>+</button>
                            <p className='shoppingCart-price'>£{item.price}</p>
                            <button className='shoppingButton-remove' onClick={() =>handleDelete(item._id)}>Remove</button>
                        </li>
                    )
                })}     
            </ul>
            <p className='shoppingCart-total'>{renderMessage()}</p>
        </div>
    )
}

export default ShoppingCart;