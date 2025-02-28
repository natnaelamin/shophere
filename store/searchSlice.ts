import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface searchState {
    searchQuery: string;
}

const initialState: searchState ={
    searchQuery: "",
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers:{
        setSearchQuery:(state, action: PayloadAction<string>)=>{
            state.searchQuery = action.payload;
        }
    }

})

export const {setSearchQuery} = searchSlice.actions;
export default searchSlice.reducer;