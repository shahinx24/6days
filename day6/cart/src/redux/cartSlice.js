import { createSlice } from "@reduxjs/toolkit"

const initState = {
    cartItem = []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {}
})

export default createSlice.reducer;