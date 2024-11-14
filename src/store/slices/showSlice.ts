import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store.ts';
import { fetchShows, getOneShowInfo } from '../thunks/showThunks.ts';
import { InitialState } from '../../types';

const initialState: InitialState = {
  shows: [],
  showValueFromUser: '',
  showDetailedInformation: null,
  isLoading: false,
  error: false,
};

export const selectShows = (state: RootState) => state.show.shows;
export const showInform = (state: RootState) => state.show.showValueFromUser;
export const showInformation = (state: RootState) => state.show.showDetailedInformation;

const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {
    userValue: (state, action: PayloadAction<string>) => {
      state.showValueFromUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShows.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchShows.fulfilled, (state, action) => {
        state.isLoading = false;
        state.shows = action.payload;
      })
      .addCase(fetchShows.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(getOneShowInfo.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getOneShowInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.showDetailedInformation = action.payload;
      })
      .addCase(getOneShowInfo.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  }
});

export const showReducer = showSlice.reducer;
export const {userValue} = showSlice.actions;
