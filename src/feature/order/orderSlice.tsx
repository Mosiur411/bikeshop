import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IOrder {
    _id?: string;
    email?: string;
    products?: {
        product: string;
        quantity: number;
        price: number;
    }[];
    totalquantity?: number;
    totalPrice?: number;
}

export const orderApiSlice = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://assignment-4-server-blond.vercel.appapi/'
    }),
    tagTypes: ['Order'],
    endpoints: (builder) => ({
        orderCheckout: builder.mutation<IOrder, string>({
            query: (data) => ({
                url: '/order/checkout',
                method: 'POST',
                body: data,
            }),
        }),
        orderconfirm: builder.mutation<IOrder, string>({
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