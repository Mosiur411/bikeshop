import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseApi } from '../../store/baseApi';


export const userApiSlice = createApi({
    reducerPath: 'userApi',
    baseQuery: baseApi,
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getProfile: builder.query({
            query: () => `/user/${localStorage.getItem('id')}`,
            providesTags: ['user'],
          }),
    }),
});

export const {
    useGetProfileQuery
    
} = userApiSlice;