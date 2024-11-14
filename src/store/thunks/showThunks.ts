import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IShowAPI, IShowDetail } from '../../types';

export const fetchShows = createAsyncThunk(
  'show/fetchShows',
  async (userValue: string) => {
  const response = await axios<IShowAPI[]>(`http://api.tvmaze.com/search/shows?q=${userValue}`);
    return response.data.map((item) => {
      return {
        id: item.show.id,
        name: item.show.name,
      };
    });
});

export const getOneShowInfo = createAsyncThunk(
  'show/getOneShowInfo',
  async (id: number) => {
    const showResponse = await axios<IShowDetail>(`http://api.tvmaze.com/shows/${id}`);
    return {
        name: showResponse.data.name,
        summary: showResponse.data.summary,
        genres: showResponse.data.genres[0],
        language: showResponse.data.language,
        premiered: showResponse.data.premiered,
        ended: showResponse.data.ended,
        runtime: showResponse.data.runtime,
        image: showResponse.data.image,
      };
  }
);



