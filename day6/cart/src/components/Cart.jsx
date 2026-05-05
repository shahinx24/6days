import { useSelector } from "react-redux";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);

    return (
        <div>
            <h2>Cart</h2>
            {cartItems.map((item,index) => (
                <div key={index}>
                    <p>Name: {item.name}</p>
                    <p>Price: {item.price}</p>
                </div>
            ))}
        </div>
    )
}
export default Cart;