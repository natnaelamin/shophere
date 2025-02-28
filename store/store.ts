import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import searchReducer from './searchSlice'


const store = configureStore({
    reducer:{
        cart: cartReducer,
        search: searchReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
export default store;