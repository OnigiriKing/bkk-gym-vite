import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import usersData from "@/utils/data/usersData";
import profilePics from "@/utils/data/profilePics";

interface User {
  name: string;
  email: string;
  password: string;
  img: string;
}

type PublicUser = Omit<User, "password">;

interface UserState {
  users: Record<string, User>;
  currentUser: PublicUser | null;
  isLoggedIn: boolean;
}

const initialState: UserState =
  JSON.parse(localStorage.getItem("users") || "null") || usersData;

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    registerUser: (
      state,
      action: PayloadAction<{ name: string; email: string; password: string }>
    ) => {
      const { name, email, password } = action.payload;
      if (!state.users[email]) {
        state.users[email] = {
          name,
          email,
          password,
          img: profilePics.ppDef,
        };
        localStorage.setItem("users", JSON.stringify(state));
      }
    },
    loginUser: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      const { email, password } = action.payload;
      if (state.users[email] && state.users[email].password === password) {
        state.currentUser = {
          name: state.users[email].name,
          email: state.users[email].email,
          img: state.users[email].img,
        };

        state.isLoggedIn = true;
        localStorage.setItem("users", JSON.stringify(state));
      }
    },
    logOut: (state) => {
      if (state.isLoggedIn === true) {
        state.currentUser = null;
        state.isLoggedIn = false;
        localStorage.setItem("users", JSON.stringify(state));
      }
    },
    changePic: (state, action: PayloadAction<{ newPic: string }>) => {
      if (!state.currentUser) return;
      const userRecord = state.users[state.currentUser.email];
      const { newPic } = action.payload;
      state.currentUser.img = newPic;
      userRecord.img = newPic;
      localStorage.setItem("users", JSON.stringify(state));
    },
    changePassword: (
      state,
      action: PayloadAction<{ oldPass: string; newPass: string }>
    ) => {
      if (!state.currentUser) return;
      const { oldPass, newPass } = action.payload;
      const userRecord = state.users[state.currentUser.email];

      if (
        userRecord &&
        userRecord.password === oldPass &&
        newPass.length >= 4 &&
        newPass !== ""
      ) {
        userRecord.password = newPass;
        localStorage.setItem("users", JSON.stringify(state));
      }
    },
    changeName: (state, action: PayloadAction<{ newName: string }>) => {
      if (!state.currentUser) return;
      const userRecord = state.users[state.currentUser.email];
      const { newName } = action.payload;
      if (
        newName !== state.currentUser.name &&
        newName !== "" &&
        newName.length >= 4
      ) {
        state.currentUser.name = newName;
        userRecord.name = newName;
        localStorage.setItem("users", JSON.stringify(state));
      }
    },
  },
});

export const {
  registerUser,
  loginUser,
  logOut,
  changePic,
  changeName,
  changePassword,
} = userInfoSlice.actions;
export default userInfoSlice.reducer;
