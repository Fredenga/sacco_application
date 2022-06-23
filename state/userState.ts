import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface User {
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  accessToken: string;
}
const initialState: User = {
  user: {
    _id: "",
    firstName: "",
    email: "",
    lastName: "",
  },
  accessToken: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state: any, action: PayloadAction<User>) => {
      state.access_token = action.payload.accessToken;
      state.user = action.payload.user;
    },
  },
});

export const { loginUser } = userSlice.actions;
export default userSlice.reducer;
