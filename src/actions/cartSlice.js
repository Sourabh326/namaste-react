import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        item: []
    },
    reducers: {
        addToCart: (state, action)=>{
            state.item.push(action.payload);
        },
        removeCart: (state, action)=>{
            state.item.pop();
        },
        clearCart: ()=>{
            return {
                item: []
            }
        }
    }
});
export const { addToCart, removeCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
