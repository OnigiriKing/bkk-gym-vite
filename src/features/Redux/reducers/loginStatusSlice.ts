import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface LoginStateType {
  type: string;
  userName: string;
  login: string;
  password: string;
  reg: string;
}

const initialState: LoginStateType = {
  type: "Sign Up",
  userName: "",
  login: "",
  password: "",
  reg: "",
};

const loginStatusSlice = createSlice({
  name: "loginStatus",
  initialState,
  reducers: {
    setLoginStatus: (state, action: PayloadAction<Partial<LoginStateType>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setLoginStatus } = loginStatusSlice.actions;
export default loginStatusSlice.reducer;
