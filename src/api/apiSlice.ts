import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL } from '@/config';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: async (headers) => {
      headers.set('X-Country-Id', 'TR');
      headers.set('X-Language-Id', 'TR');
      return headers;
    },
  }),
  endpoints: () => ({}),
});
