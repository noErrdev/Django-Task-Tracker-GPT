import { createSlice } from "@reduxjs/toolkit";
import { loginAPI, signupAPI } from "../api/userAPI";

export interface UserState {
  accessToken: string | null;
  refreshToken: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UserState = {
  accessToken: localStorage.getItem("accessToken")
    ? localStorage.getItem("accessToken")
    : null,
  refreshToken: localStorage.getItem("refreshToken")
    ? localStorage.getItem("refreshToken")
    : null,
  status: "idle",
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateNewToken: (state, action) => {
      const { access_token, refresh_token } = action.payload;
      state.accessToken = access_token;
      state.refreshToken = refresh_token;
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("refreshToken", refresh_token);
    },
    clearStatusAndError: (state) => {
      state.status = "idle";
      state.error = null;
    },
    userLogout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupAPI.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signupAPI.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { access_token, refresh_token } = action.payload;
        state.accessToken = access_token;
        state.refreshToken = refresh_token;
        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("refreshToken", refresh_token);
      })
      .addCase(signupAPI.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload.error || "Something went wrong";
      })

      .addCase(loginAPI.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAPI.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { access_token, refresh_token } = action.payload;
        state.accessToken = access_token;
        state.refreshToken = refresh_token;
        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("refreshToken", refresh_token);
      })
      .addCase(loginAPI.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload.error || "Something went wrong";
      });
  },
});

export const { userLogout, clearStatusAndError, updateNewToken } =
  userSlice.actions;

export default userSlice.reducer;
