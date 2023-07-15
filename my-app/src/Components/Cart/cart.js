import { useNavigate } from "react-router-dom";

function Cart ({cartItems, setCartItems}){

    const navigate = useNavigate();

    function onClick() {
        navigate(`/cart`);
    }

    return (
        <div>
            <button onClick={onClick}>Shopping Cart</button>
            <p>{cartItems.title}</p>
        </div>
    )
}

export default Cart;