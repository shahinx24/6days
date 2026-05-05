import { useLocation } from "react-router-dom";

export default function Page(){
    const location = useLocation();
    const data = location.state;

    return(
        <div className="card">
          <img src={data.image}/>
          <p>Name: {data.firstName}</p>
          <p>Mail: {data.email}</p>
        </div>
    )
}