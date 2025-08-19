import profilePics from "./profilePics";

const usersData = {
  currentUser: {},
  isLoggedIn: false,
  users: {
    "admin@bbkmail.com": {
      name: "admin",
      email: "admin@bbkmail.com",
      password: "admin12",
      img: profilePics.ppAdmin,
    },
  },
};

export default usersData;
