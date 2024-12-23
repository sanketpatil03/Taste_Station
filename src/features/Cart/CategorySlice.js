import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category : "All"
}

const CategorySlice = createSlice({
    name : "category",
    initialState,
    reducers : {
        selectCategory : (state, action) =>{
            state.category = action.payload;
        }
    }

})

export const {selectCategory} =  CategorySlice.actions;

export default CategorySlice.reducer;