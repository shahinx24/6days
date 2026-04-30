export default function ProductCard({ product }) {
    return (
        <div className="card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <h4>₹{product.price}</h4>
            <button>Add to Cart</button>
        </div>
    )
}