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

    return (
        <div>
            <ul>
                {cartItems.map((item) => {
                    const quantityMessage = item.quantity === 1 ? "Quantity X 1" : `Quantity X ${item.quantity} `;
                    return (
                        <li key={item.id}>
                            <img src={item.imageURL[0].url} alt={item.title} />
                            <p>{item.title}</p>
                            <button onClick={() => itemDecrease(item._id)}>+</button>
                            <p>{quantityMessage}</p>
                            <button onClick={() => itemIncrease(item._id)}>-</button>
                            <p>£{item.price}</p>
                            <button onClick={() =>handleDelete(item._id)}>Remove</button>
                        </li>
                    )
                })}     
            </ul>
            <p>Total Price: £{totalPrice}</p>
        </div>
    )
}

export default ShoppingCart;