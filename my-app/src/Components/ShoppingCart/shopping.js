

function ShoppingCart ({cartItems, setCartItems}) {
console.log(cartItems);

    return (
        <div>
            <ul>
                {cartItems.map((item) => {
                    return (
                        <li key={item.id}>
                            <img src={item.imageURL[0].url} alt={item.title} />
                            <p>{item.title}</p>
                            <p>£{item.price}</p>
                        </li>
                    )
                })}     
            </ul>
        </div>
    )
}

export default ShoppingCart;