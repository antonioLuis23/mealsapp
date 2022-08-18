import { createSlice } from "@reduxjs/toolkit";

//create type of createSlice for favorites
export type FavoritesSliceProps = {
  ids: string[];
};
const state: FavoritesSliceProps = {
  ids: [],
};
const favoritesSlice = createSlice({
  name: "favorites",
  initialState: state,

  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;
