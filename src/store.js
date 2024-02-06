import { configureStore } from '@reduxjs/toolkit'
import productReducer from './slicers/productSlice'
export default configureStore({
  reducer: {
    product: productReducer
    },
})