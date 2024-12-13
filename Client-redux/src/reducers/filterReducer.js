import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    /**
     * Sets the filter text in the Redux store to the given value.
     *
     * The filter text is used to filter the list of anecdotes. The filter
     * text is a string and can be empty, in which case all anecdotes are
     * shown.
     *
     * @param {string} state The current state of the filter text in the
     *   Redux store.
     * @param {object} action The action that triggered this reducer.
     * @param {string} action.payload The new value of the filter text.
     * @returns {string} The new value of the filter text.
     */
    filterChange(state, action) {
      return action.payload;
    },
  },
});

export const { filterChange } = filterSlice.actions;
export default filterSlice.reducer;
