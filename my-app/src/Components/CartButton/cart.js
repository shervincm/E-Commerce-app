import { useNavigate } from "react-router-dom";

function Cart (){

    const navigate = useNavigate();

    function onClick() {
        navigate(`/cart`);
    }

    return (
        <div>
            <button onClick={onClick}>Shopping Cart</button>
        </div>
    )
}

export default Cart;