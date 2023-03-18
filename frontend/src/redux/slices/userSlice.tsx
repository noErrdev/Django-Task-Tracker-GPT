import { createSlice } from "@reduxjs/toolkit";
import { loginAPI, signupAPI } from "../api/userAPI";

export interface UserState {
  userToken: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UserState = {
  userToken: null,
  status: "idle",
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupAPI.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(signupAPI.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userToken = action.payload["access_token"];
        localStorage.setItem("userToken", action.payload["access_token"]);
      })
      .addCase(signupAPI.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload.error || "Something went wrong";
        state.userToken = null;
      })

      .addCase(loginAPI.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(loginAPI.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userToken = action.payload["access_token"];
        localStorage.setItem("userToken", action.payload["access_token"]);
      })
      .addCase(loginAPI.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload.error || "Something went wrong";
        state.userToken = null;
      });
  },
});

// export const { login } = userSlice.actions;

export default userSlice.reducer;
