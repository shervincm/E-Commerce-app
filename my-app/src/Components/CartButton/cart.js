import { useNavigate } from "react-router-dom";
import './cart.css';
import trolley from '../../Images/trolley.png';

function Cart (){

    const navigate = useNavigate();

    function onClick() {
        navigate(`/cart`);
    }

    return (
        <div>
            <button className='cart-button' onClick={onClick}><img src={trolley} alt='Shopping cart'/> </button>
        </div>
    )
}

export default Cart;