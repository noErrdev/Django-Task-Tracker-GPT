import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../utils/axiosInstance";

type LoginData = {
  username: string;
  password: string;
};

type SignupData = {
  name: string;
  username: string;
  password: string;
};

export const loginAPI = createAsyncThunk(
  "user/login",
  async ({ username, password }: LoginData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(baseURL + "/api/accounts/login/", {
        username,
        password,
      });
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signupAPI = createAsyncThunk(
  "user/signup",
  async ({ name, username, password }: SignupData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        baseURL + "/api/accounts/user-create/",
        { name, username, password }
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
