import { useSelector } from "react-redux";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);

    return (
        <div  className="cart-grid">
            <h2>Cart</h2>
            {cartItems.length === 0 && <p>Your cart is empty.</p>}
            {cartItems.map((item) => (
                <div key={item.id} className="card">
                    <p>Name: {item.name}</p>
                    <p>Price: {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                </div>
            ))}
        </div>
    )
}
export default Cart;
