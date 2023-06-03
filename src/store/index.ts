import {
  combineReducers,
  ActionFromReducersMapObject,
  Reducer,
  StateFromReducersMapObject,
} from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { apiSlice } from '@/api/apiSlice';
import { promotionsSliceReducer } from '@/features/promotions/store/promotionsSlice';

const reducers = {
  promotions: promotionsSliceReducer,
};

export const store = configureStore({
  reducer: {
    ...reducers,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

const rootReducer: Reducer<
  StateFromReducersMapObject<typeof reducers>,
  ActionFromReducersMapObject<typeof reducers>
> = combineReducers(reducers);
export type RootState = ReturnType<typeof rootReducer>;
