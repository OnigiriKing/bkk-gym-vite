import { Link } from "react-router-dom";
import logo from "utils/img/logo.png";
import allSvg from "svg/allSvg";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setInfo } from "features/Redux/reducers/loginWindowSlice";

export default function Header() {
  const [scrolled, setScroll] = React.useState(false);

  const dispatch = useDispatch();
  const loginWindow = useSelector((store) => store.loginWindow.login);
  const infoWindow = useSelector((store) => store.loginWindow.info);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div
        className={`fixed flex justify-center w-full top-0 ${
          scrolled ? "bg-transparent" : "bg-black"
        }  text-white z-[100]`}
      >
        {loginWindow ? (
          <div
            className="bg-black absolute w-[100vw] opacity-[20%] h-[100vh] z-[90]"
            onClick={() => dispatch(setLogin())}
          ></div>
        ) : (
          ""
        )}
        {infoWindow ? (
          <div
            className="bg-black absolute w-[100vw] opacity-[20%] h-[100vh] z-[90]"
            onClick={() => dispatch(setInfo())}
          ></div>
        ) : (
          ""
        )}
        <div className="justify-between  common-wrapper items-center flex py-2">
          <Link to="/">
            <img src={logo} alt="logo" className="w-20"/>
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="duration-500 hover:text-red-600 ">
              Home
            </Link>
            <Link to="/schedule" className="duration-500 hover:text-red-600">
              Schedule
            </Link>
            <Link to="/blog" className="duration-500 hover:text-red-600">
              Blog
            </Link>
            <Link to="/classes" className="duration-500 hover:text-red-600">
              Classes
            </Link>
            <Link to="/contact" className="duration-500 hover:text-red-600">
              Contact
            </Link>
          </div>
          <div className="flex gap-3 items-center">
            <div
              className="group cursor-pointer"
              onClick={() => dispatch(setLogin())}
            >
              {allSvg(25).user}
            </div>
            <div
              className="group cursor-pointer"
              onClick={() => dispatch(setInfo())}
            >
              {allSvg(25).about}
            </div>
            <Link className="group ml-4 flex gap-2 items-center p-[.4rem] border-[1px] border-solid border-[rgb(255,255,255,0.6)]">
              <div className="duration-0 group-hover:rotate-180 group-hover:duration-500">
                {allSvg(30).add}
              </div>
              <p className="text-[.9rem]">JOIN CLASS NOW</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

