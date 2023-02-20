import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState, SortPropertyEnum, SortType } from "./types";

const initialState: FilterSliceState = {
  categoryId: 0,
  searchValue: "",
  sort: {
    name: "популярности(DESC)",
    sortProperty: SortPropertyEnum.RATING_DESC,
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = Number(action.payload);
    },

    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },

    setSort(state, action: PayloadAction<SortType>) {
      state.sort = action.payload;
    },

    setFilters(state, action: PayloadAction<FilterSliceState>) {
      state.sort = action.payload.sort;
      state.categoryId = action.payload.categoryId;
    },
  },
});

export const { setCategoryId, setSort, setFilters, setSearchValue } =
  filterSlice.actions;
export default filterSlice.reducer;
