import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);

    return (
        <>
            <h2>Cart</h2>
            <div className="cart-grid">
                {cartItems.length === 0 && <p>Your cart is empty.</p>}
                {cartItems.map((item) => (
                    <div key={item.id} className="card">
                        <p>Name: {item.name}</p>
                        <p>Price: {item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => dispatch(remove(item.id))}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Cart;