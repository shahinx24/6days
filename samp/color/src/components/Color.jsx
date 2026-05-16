import { useSelector, useDispatch } from "react-redux";
import { setRed, setBlue, setGreen } from "../redux/colorSlice";

export default function Color(){
    const bgColor = useSelector(
        (state)=> state.color.backgroundColor
    );
    const dispatch = useDispatch();

    return(
        <div
         style={{
            backgroundColor: bgColor,
            height: "100vh",
            display: "flex",
            justifyContent:"center",
            gap:"10px",
            alignItems: "center"
         }}
        >
            <button onClick={()=> dispatch(setRed())}>
                Red
            </button>
            <button onClick={()=> dispatch(setBlue())}>
                Blue
            </button>
            <button onClick={()=> dispatch(setGreen())}>
                Green
            </button>
        </div>
    )
}