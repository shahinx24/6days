import './App.css'
import ProductCard from './components/ProductCard'

function App() {
  const product = [
    {
      id: 1,
      name: "laptop",
      price: 120000,
      image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Feature-Bing-Wallpaper-Giants-Causeway:VP4-630x449"
    },
    {
      id: 2,
      name: "Smart Phone",
      price: 20000,
      image: "https://media.wired.com/photos/69a7c72587228d68f614038f/4:3/w_1280%2Cc_limit/Google%2520Pixel%252010a%2520screen%2520SOURCE%25202%2520Julian%2520Chokkattu.png"
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 10000,
      image: "https://ptron.in/cdn/shop/files/B0C81WSDV1.MAIN_637x.jpg?v=1690546549"
    }
  ]

  return (
    <div className='container'>
      {product.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  )
}

export default App
