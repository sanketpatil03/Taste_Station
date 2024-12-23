import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../features/Cart/CartSlice";
import CategorySlice from "../features/Cart/CategorySlice";
import SearchSlice from "../features/Cart/SearchSlice";
const store = configureStore({
    reducer : {
        cartSlice : CartSlice,
        categorySlice : CategorySlice,
        search : SearchSlice
    }
});

export default store;