import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchInput : ""
}

const SearchSlice = createSlice({
    name: "search",
    initialState,
    reducers : {
        searchBar: (state, action) =>
        {
            state.searchInput = action.payload
        }
    }
})
export const {searchBar}  = SearchSlice.actions;
export default SearchSlice.reducer;