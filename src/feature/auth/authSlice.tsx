import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Types
interface User {
  _id: string;
  name: string;
  email: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

interface AuthResponse {
  [x: string]: any;
  user: User;
  token: string;
}

// RTK Query API
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://assignment-4-server-blond.vercel.app/api' 
  }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation<AuthResponse, RegisterRequest>({
      query: (userData) => ({
        url: '/auth/register',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { 
  useLoginMutation, 
  useRegisterMutation 
} = authApi;

export default authApi;