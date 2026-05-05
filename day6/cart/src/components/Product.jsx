import { addToCart } from "../redux/cartSlice"
import { useDispatch } from "react-redux";

const Product = ()=>{
    const  dispatch = useDispatch();

    const product = {
        id: 1,
        name: "shoe",
        price: 1000
    };

    return(
        <div>
            <h2>{product.name}</h2>
            <button onClick={()=> dispatch(addToCart(product))}>
                Add to Cart
            </button>
        </div>
    )
}

export default Product;