import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
    name: "color",
    initialState: {
        backgroundColor: "white",
    },
    reducers: {
        setRed: (state)=> {
            state.backgroundColor = "red"
        },
        setBlue: (state)=> {
            state.backgroundColor= "blue"
        },
        setGreen: (state)=> {
            state.backgroundColor= "green"
        },
    }
});

export const { setRed, setBlue, setGreen } = colorSlice.actions;
export default colorSlice.reducer;