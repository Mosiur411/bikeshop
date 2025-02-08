import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseApi = fetchBaseQuery({
  baseUrl: 'http://localhost:3000/api/',
  prepareHeaders: (headers) => {
    // Retrieve token from localStorage or any state management
    const token = localStorage.getItem('token'); // Adjust as needed
    if (token) {
      headers.set('Authorization', `${token}`);
    }
    
    headers.set('Content-Type', 'application/json');
    return headers;
  },
  mode: 'cors',
});
