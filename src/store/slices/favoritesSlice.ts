import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "../localStorage";

interface IfavoritesSliceState {
  favorites: string[];
}

const persistedState = loadState();

const initialState = persistedState
  ? ({favorites:  persistedState.favorites.favorites} as IfavoritesSliceState)
  : ({ favorites: [] } as IfavoritesSliceState);

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<string>) => {
      state.favorites
        ? state.favorites.push(action.payload)
        : (state.favorites = [action.payload]);
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites?.filter(
        (favorite) => favorite !== action.payload
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
