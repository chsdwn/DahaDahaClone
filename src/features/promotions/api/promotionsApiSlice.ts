import { apiSlice } from '@/api/apiSlice';

import type {
  IPromotionDetails,
  IPromotionItem,
  IPromotionTag,
} from '../types';

const promotionsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTags: builder.query<IPromotionTag[], void>({
      query: () => '/tags/list',
    }),
    getPromotions: builder.query<IPromotionItem[], void>({
      query: () => '/promotions/list?Channel=PWA',
    }),
    getPromotionDetails: builder.query<IPromotionDetails, number>({
      query: (id) => `/promotions?Id=${id}`,
    }),
  }),
});

export const {
  useGetTagsQuery,
  useGetPromotionsQuery,
  useGetPromotionDetailsQuery,
} = promotionsApiSlice;
