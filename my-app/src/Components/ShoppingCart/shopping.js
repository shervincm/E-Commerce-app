

function ShoppingCart ({cartItems, setCartItems, }) {

    function handleDelete(id) {
    const updatedCartItems = cartItems.filter((item) => {
        return item._id !== id;
    })
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));}

    return (
        <div>
            <ul>
                {cartItems.map((item) => {
                    return (
                        <li key={item.id}>
                            <img src={item.imageURL[0].url} alt={item.title} />
                            <p>{item.title}</p>
                            <p>£{item.price}</p>
                            <button onClick={() =>handleDelete(item._id)}>Remove</button>
                        </li>
                    )
                })}     
            </ul>
        </div>
    )
}

export default ShoppingCart;