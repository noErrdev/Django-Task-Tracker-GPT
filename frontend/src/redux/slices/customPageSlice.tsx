import { createSlice } from "@reduxjs/toolkit";
import { getCustomPageAPI, createCustomPageAPI } from "../api/customPageAPI";

export interface UserState {
  customPages: Array<any>;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UserState = {
  customPages: [],
  status: "idle",
  error: null,
};

export const customPageSlice = createSlice({
  name: "customPage",
  initialState,
  reducers: {
    updatePageName: (state, action) => {
      const { id, title } = action.payload;
      const page = state.customPages.find((page) => page.id === id);
      if (page) {
        page.title = title;
      }
    },
    deletePage: (state, action) => {
      const { id } = action.payload;
      state.customPages = state.customPages.filter((page) => page.id !== id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCustomPageAPI.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCustomPageAPI.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.customPages = action.payload;
      })
      .addCase(getCustomPageAPI.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action?.payload?.error || "Something went wrong";
      })

      .addCase(createCustomPageAPI.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createCustomPageAPI.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.customPages = [...state.customPages, action.payload];
      })
      .addCase(createCustomPageAPI.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action?.payload?.error || "Something went wrong";
      });
  },
});

export const { updatePageName, deletePage } = customPageSlice.actions;

export default customPageSlice.reducer;
