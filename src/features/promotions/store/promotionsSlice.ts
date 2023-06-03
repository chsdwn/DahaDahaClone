import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/store';
import { IPromotionTag } from '../types';

type IInitialState = {
  activeTag: IPromotionTag | null;
};

const initialState: IInitialState = { activeTag: null };

const promotionsSlice = createSlice({
  name: 'promotions',
  initialState,
  reducers: {
    changeActiveTag: (state, action: PayloadAction<IPromotionTag | null>) => {
      if (!action.payload || state.activeTag?.Id === action.payload.Id) {
        state.activeTag = null;
      } else {
        state.activeTag = action.payload;
      }
    },
  },
});

export const promotionsSliceActions = promotionsSlice.actions;
export const promotionsSliceReducer = promotionsSlice.reducer;

export const selectActiveTag = (state: RootState) => state.promotions.activeTag;
