import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../types";

interface BookState {
  filters: {
    search: string;
    genre: string;
    year: string;
  };
  selectedBook: IBook | null;
}

const initialState: BookState = {
  filters: {
    search: "",
    genre: "",
    year: "",
  },
  selectedBook: null,
};
const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setSearchFilter: (state, action: PayloadAction<string>) => {
      state.filters.search = action.payload;
    },
    setGenreFilter: (state, action: PayloadAction<string>) => {
      state.filters.genre = action.payload;
    },
    setYearFilter: (state, action: PayloadAction<string>) => {
      state.filters.year = action.payload;
    },
    clearFilters: (state) => {
      state.filters = {
        search: "",
        genre: "",
        year: "",
      };
    },
  },
});
export const { clearFilters, setGenreFilter, setYearFilter, setSearchFilter } =
  bookSlice.actions;
export default bookSlice.reducer;
