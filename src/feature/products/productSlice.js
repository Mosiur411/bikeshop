import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseApi } from '../../store/baseApi';



export const productApiSlice = createApi({
  reducerPath: 'productApi',
  baseQuery: baseApi,
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
      providesTags: ['Product'],
    }),
    getProduct: builder.query({
      query: (id) => `/product/${id}`,
      providesTags: ['Product'],
    }),
    searchProducts: builder.query({
      query: (searchTerm) => `/products/search?q=${searchTerm}`,
      providesTags: ['Product'],
    }),
    filterProducts: builder.query({
      query: (filters) => ({
        url: '/products/filter',
        params: filters,
      }),
      providesTags: ['Product'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useSearchProductsQuery,
  useFilterProductsQuery,
} = productApiSlice;