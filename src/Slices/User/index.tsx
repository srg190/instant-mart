import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit"; // to handle api
import { Api } from "Constants/apis";
import axios from "axios";
import { setTokenIntoCookies } from "utilities";

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
  token?: string;
  cartId?: string;
}

export interface userState {
  error: string;
  user: User;
  loading: boolean;
  expiresInMins?: number;
  isAutenticated: boolean;
  token: string;
  message?: string;
}

const initialState = {
  user: {},
  loading: false,
  expiresInMins: 10,
  error: "",
  isAutenticated: false,
  token: "",
  message: "",
} as userState;

export const userRegistration = createAsyncThunk(
  "user/createUser",
  async (data: User, thunkAPI) => {
    try {
      const res = await axios.post(Api.REGISTER_USER, data);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue({
          error: error.response?.data?.message as string,
        });
      } else {
        return "An error occurred";
      }
    }
  }
);

export const userLogin = createAsyncThunk(
  "user/loginUser",
  async (data: User, thunkAPI) => {
    try {
      const res = await axios.post(Api.LOGIN_USER, data);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue({
          error: error.response?.data?.message as string,
        });
      } else {
        return "An error occurred";
      }
    }
  }
);

const userSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Registration
    builder.addCase(userRegistration.pending, (state) => {
      state.loading = true;
      state.message = "";
      state.error = "";
    });
    builder.addCase(userRegistration.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      setTokenIntoCookies(state.token);
      state.isAutenticated = true;
      state.error = "";
      state.message = action.payload.message;
    });
    builder.addCase(userRegistration.rejected, (state, action) => {
      const payloadError = (action.payload as { error: string })?.error;
      state.loading = false;
      state.error = payloadError || "";
      state.message = "";
    });

    // login
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.message = "";
      state.error = "";
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAutenticated = true;
      setTokenIntoCookies(state.token);
      state.error = "";
      state.message = action.payload.message;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      const payloadError = (action.payload as { error: string })?.error;
      state.loading = false;
      state.error = payloadError || "";
      state.message = "";
    });
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
