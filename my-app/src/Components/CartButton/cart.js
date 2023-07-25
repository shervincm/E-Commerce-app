import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import trolley from "../../Images/trolley.png";

function Cart({ cartItems }) {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);

  function onClick() {
    navigate(`/cart`);
  }

  console.log(showMessage);

  useEffect(() => {
    // Show the message for 3 seconds when a new item is added
    if (cartItems.length > 0) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
  }, [cartItems]);

  // Calculate the total quantity of items in the cart
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="cart-wrapper">
      <button className="cart-button" onClick={onClick}>
        <img src={trolley} alt="Shopping cart" />
        <span className="cart-count">{totalQuantity}</span>
      </button>
    </div>
  );
}

export default Cart;