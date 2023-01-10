import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
const store = configureStore({
    reducer: {
        cart: cartReducer,
        // Product : productReducer            so on...
    }
})
export default store