import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store.ts';
import { fetchAllDishes } from '../thunks/showThunks.ts';
import { InitialState } from '../../types';

const initialState: InitialState = {
  shows: [],
  isLoading: false,
  error: false,
};

export const selectShows = (state: RootState) => state.show.shows;

const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllDishes.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchAllDishes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.shows = action.payload;
      })
      .addCase(fetchAllDishes.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  }
});

export const showReducer = showSlice.reducer;
