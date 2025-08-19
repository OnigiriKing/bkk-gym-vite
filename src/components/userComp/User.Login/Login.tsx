import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import LoginFooter from "./Login.LoginFooter";
import { loginUser, registerUser } from "features/Redux/reducers/userSlice";
import { setLoginStatus } from "features/Redux/reducers/loginStatusSlice";

export default function Login() {
  const loginStatus = useSelector((state) => state.loginStatus);
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setUserName] = useState("");

  const mailTypes = [
    "@gmail.com",
    "@protonmail.com",
    "@hotmail.com",
    "@bbkmail.com",
  ];

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  function handleSubmit(event) {
    let userNameError = "",
      loginError = "",
      passwordError = "";

    if (loginStatus.type === "Sign Up") {
      if (name.length < 4) {
        userNameError = "Name must be 4+ characters";
        event.preventDefault();
      }
      if (!/^[^\d]+$/.test(name)) {
        userNameError = "Names must not include numbers";
        event.preventDefault();
      }
      if (/^[^\d]+$/.test(name) && name.length >= 4) {
        userNameError = "";
      }
    }

    if (password.length < 6) {
      passwordError = "Password must be 6+ characters";
      event.preventDefault();
    } else {
      passwordError = "";
    }

    if (!mailTypes.some((mailType) => email.includes(mailType))) {
      loginError = "Invalid Email";
      event.preventDefault();

      if (password.length >= 6) {
        passwordError = "";
      }
    }

    dispatch(
      setLoginStatus({
        userName: userNameError,
        login: loginError,
        password: passwordError,
      })
    );

    if (!userNameError && !loginError && !passwordError) {
      if (loginStatus.type === "Sign Up") {
        if (!userInfo.users[email]) {
          dispatch(registerUser({ name, email, password }));
          dispatch(
            setLoginStatus({
              reg: "Your account has been succesfully registered!",
            })
          );
        } else {
          dispatch(
            setLoginStatus({ login: "This email was already registered" })
          );
        }
      } else if (loginStatus.type === "Sign In") {
        const user = userInfo.users[email];
        if (user && user.password === password) {
          dispatch(loginUser({ email, password }));
        }
        if (user && user.password !== password) {
          dispatch(setLoginStatus({ password: "Incorrect password" }));
        }
        if (!user) {
          dispatch(setLoginStatus({ login: "This account does not exist" }));
        }
      }
    }
  }

  return (
    <>
      <h3 className="text-black text-center font-bold text-2xl mb-[1rem]">
        {loginStatus.type}
      </h3>
      <h4 className="flex justify-center mb-[1rem] text-green-600">
        {loginStatus.reg}
      </h4>
      <div className="flex flex-col gap-[1.5rem]">
        <form className="flex flex-col gap-[1.5rem]" onSubmit={handleSubmit}>
          {loginStatus.type === "Sign Up" ? (
            <div className="flex flex-col">
              <label className="text-lg">Name</label>
              <p className="text-red-600">{loginStatus.userName}</p>
              <input
                onChange={(e) => handleUserNameChange(e)}
                placeholder="First Name"
                className="input-style mt-[0.4rem]"
              ></input>
            </div>
          ) : (
            ""
          )}
          <div className="flex flex-col">
            <label className="text-lg">Email</label>
            <p className="text-red-600">{loginStatus.login}</p>
            <input
              onChange={(e) => handleEmailChange(e)}
              placeholder="BbkGym@gmail.com"
              className="input-style mt-[0.4rem]"
              type="email"
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="text-lg">Password</label>
            <p className="text-red-600">{loginStatus.password}</p>
            <input
              onChange={(e) => handlePasswordChange(e)}
              placeholder="Password"
              type="password"
              className="input-style mt-[0.4rem]"
            ></input>
          </div>
          <button className="bg-red-600 text-white py-[.6rem]" type="submit">
            {loginStatus.type}
          </button>
        </form>
        <div className="">
          <LoginFooter />
        </div>
      </div>
    </>
  );
}
