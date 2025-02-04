import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const orderApiSlice = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://assignment-4-server-blond.vercel.appapi/'
    }),
    tagTypes: ['Order'],
    endpoints: (builder) => ({
        orderCheckout: builder.mutation({
            query: (data) => ({
                url: '/order/checkout',
                method: 'POST',
                body: data,
            }),
        }),
        orderconfirm: builder.mutation({
            query: (data) => ({
                url: '/order/confirm-order',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const {
    useOrderCheckoutMutation,
    useOrderconfirmMutation
} = orderApiSlice;