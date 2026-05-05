import { useEffect, useState } from "react"
import './style.css'

export default function Home() {
    const [store, setStore] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/carts?limit=10`)
            .then((res) => res.json())
            .then((data) => setStore(data.carts))
    }, [])

    function add(product) {
        setCart((prev) => {
            const exist = prev.find((item) => item.id === product.id);
            if (exist) {
                alert("Already in cart");
                return prev;
            }
            alert("cart Added");
            return [...prev, product];
        });
    }

    return (
        <div className="container">
            {store.map((cart) =>
                cart.products.map((product) => (
                    <div key={product.id} className="card">
                        <img src={product.thumbnail} />
                        <h3>{product.title}</h3>
                        <h3>${product.price}</h3>
                        <button onClick={()=>add(product)}>Add to cart</button>
                    </div>
                ))
            )}
        </div>
    )
}