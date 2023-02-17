import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface AccordionState {
  expanded: string | null;
}

// Define the initial state using that type
const initialState: AccordionState = {
  expanded: null,
};

export const counterSlice = createSlice({
  name: "accordion",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    hide: (state) => {
      state.expanded = null;
    },
    expand: (state, action: PayloadAction<string>) => {
      state.expanded = action.payload;
    },
  },
});

export const { hide, expand } = counterSlice.actions;

export const selectCount = (state: RootState) => state.accordion.expanded;

export const selectIsExpandedStatus = createSelector(
  [(state) => state.accordion.expanded, (state, name) => name],
  (expandedName, name) => expandedName === name
);

export default counterSlice.reducer;
