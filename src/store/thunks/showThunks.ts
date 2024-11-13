import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IShowAPI } from '../../types';

export const fetchAllDishes = createAsyncThunk(
  'show/fetchAllDishes',
  async (userValue: string) => {
  const response = await axios<IShowAPI[]>(`http://api.tvmaze.com/search/shows?q=${userValue}`);
    return response.data.map((item) => {
      return {
        id: item.show.id,
        name: item.show.name,
      };
    });
});



