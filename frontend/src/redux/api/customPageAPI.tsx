import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const createCustomPageAPI = createAsyncThunk(
  "customPage/createCustomPage",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/api/pages/create_page/", {});
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getCustomPageAPI = createAsyncThunk(
  "customPage/getCustomPage",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/api/pages/all_page/");
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
