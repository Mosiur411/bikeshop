import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../feature/cart/cartSlice'
import { productApiSlice } from '@/feature/products/productSlice'
import authApi from '@/feature/auth/authSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productApiSlice.reducerPath]: productApiSlice.reducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApiSlice.middleware, authApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch