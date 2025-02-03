import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IProduct {
  _id: string;
  title: string;
  author: string;
  description: string;
  category: string;
  quantity: number;
  isStock: boolean;
  price: number;
  image: string;
//   rating: number;/
}

export const productApiSlice = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://assignment-3-gray-seven.vercel.app/api/' 
  }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => '/products',
      providesTags: ['Product'],
    }),
    getProduct: builder.query<IProduct, string>({
      query: (id) => `/product/${id}`,
      providesTags: ['Product'],
    }),
    searchProducts: builder.query<IProduct[], string>({
      query: (searchTerm) => `/products/search?q=${searchTerm}`,
      providesTags: ['Product'],
    }),
    filterProducts: builder.query<IProduct[], { genre?: string; minPrice?: number; maxPrice?: number }>({
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