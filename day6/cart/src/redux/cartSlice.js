import { createSlice } from "@reduxjs/toolkit"

const initState = {
    cartItem = []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state,action)=> {
            state.cartItem.push(action.payload);
        }
    }
})
export const { addToCart } = cartSlice.actions;
export default createSlice.reducer;