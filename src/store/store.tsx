import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../feature/cart/cartSlice'
import { productApiSlice } from '@/feature/products/productSlice'
import authApi from '@/feature/auth/authSlice'
import { orderApiSlice } from '@/feature/order/orderSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productApiSlice.reducerPath]: productApiSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [orderApiSlice.reducerPath]: orderApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApiSlice.middleware,
         authApi.middleware,
         orderApiSlice.middleware,
        ),
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch