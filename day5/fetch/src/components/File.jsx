import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import './style.css'

export default function File() {
    const [store, setStore] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then((res) => res.json())
            .then((data) => setStore(data.users));
    }, []);

    return (
        <div className="container">
            {store.map((item) => (
                <div key={item.id} className="card">
                    <Link to={`/page/${item.id}`} state={item}><img src={item.image} alt={item.username} /></Link>
                    <p>{item.username}</p>
                </div>
            ))}
        </div>
    );
}