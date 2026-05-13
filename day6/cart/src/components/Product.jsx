import { addToCart } from "../redux/cartSlice"
import { useDispatch } from "react-redux";
import "./style.css"

const Product = () => {
    const dispatch = useDispatch();

    const products = [
        {
            id: 1,
            name: "Shoe",
            price: 1000
        },
        {
            id: 2,
            name: "Watch",
            price: 500
        }
    ];

    return (
        <>
            <h2>Products</h2>
            <div className="grid">
                {products.map((product) => (
                    <div key={product.id} className="card">
                        <p><b>{product.name}</b></p>
                        <p>Price: Rs. {product.price}</p>
                        <button onClick={() => dispatch(addToCart(product))}>
                            Add to Cart
                        </button>
                    </div>
                ))

                }
            </div>
        </>
    )
}

export default Product;
