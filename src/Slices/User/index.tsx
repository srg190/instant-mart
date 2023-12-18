import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit"; // to handle api
import axios from "axios";

export interface Address {
  street: string;
  location: string;
  city: string;
  houseNumber: string;
}

export interface User {
  email: string;
  password: string;
  confirmPassoword?: string;
  address?: Address;
}

export interface userState {
  error: string;
  user: User;
  loading: boolean;
  expiresInMins?: number;
}

const initialState = {
  user: {},
  loading: false,
  expiresInMins: 10,
  error: "",
} as userState;

export const userRegistration = createAsyncThunk(
  "user/createUser",
  (data: User) => {
    return axios
      .post("https://dummyjson.com/users/add", data)
      .then((res) => res.data);
  }
);

export const userLogin = createAsyncThunk(
    "user/createUser",
    (data: User) => {
      return axios
        .post("https://dummyjson.com/users/add", data)
        .then((res) => res.data);
    }
  );

const userSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userRegistration.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userRegistration.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = "";
    });
    builder.addCase(userRegistration.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "";
    });
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
