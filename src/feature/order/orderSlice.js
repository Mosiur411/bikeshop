import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseApi } from '../../store/baseApi';


export const orderApiSlice = createApi({
    reducerPath: 'orderApi',
   baseQuery: baseApi,
    tagTypes: ['Order'],
    endpoints: (builder) => ({
        orderCheckout: builder.mutation({
            query: (data) => ({
                url: '/order/checkout',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['order'],
        }),
        orderconfirm: builder.mutation({
            query: (data) => ({
                url: '/order/confirm-order',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['order'],
        }),
        getOrder: builder.query({
            query: () => '/order',
            providesTags: ['order'],
          }),
    }),
});

export const {
    useOrderCheckoutMutation,
    useOrderconfirmMutation,
    useGetOrderQuery
} = orderApiSlice;