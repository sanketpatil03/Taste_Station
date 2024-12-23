import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    cart : [],
}
const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers : {
        addToCart : (state, action) => {
            const isExisting = state.cart.find((order) => order.id == action.payload.id);
            if(isExisting){
                state.cart = state.cart.map((order)=> order.id == action.payload.id ? {...order, qty : order.qty+1} : order)
            }
            else{
                state.cart.push(action.payload)
            }
            
        },
        removeFromCart : (state, action) => {
            state.cart = state.cart.filter((order)=> order.id !== action.payload)
        },
        incrementQty : (state, action) => {
            state.cart = state.cart.map((order)=> order.id == action.payload.id ? {...order, qty: order.qty+1} : order)
        },
        decrementQty : (state, action) => {
            state.cart = state.cart.map((order)=> order.id == action.payload.id ? {...order, qty: order.qty-1} : order)
        }
    }
})

export const {addToCart, removeFromCart, incrementQty, decrementQty} = CartSlice.actions

export default CartSlice.reducer;
