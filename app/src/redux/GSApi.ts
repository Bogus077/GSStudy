import { createApi } from '@reduxjs/toolkit/query/react';
import { rosatomBaseQueryWithReAuth } from '../utils/api';

export const GSAPI = createApi({
  reducerPath: 'GS_REDUCER',
  baseQuery: rosatomBaseQueryWithReAuth,
  tagTypes: ['Users'],
  keepUnusedDataFor: 30,
  endpoints: (build) => ({
    login: build.mutation<unknown, unknown>({
      query: (credentials) => ({
        url: '/user/signIn',
        method: 'post',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = GSAPI;
