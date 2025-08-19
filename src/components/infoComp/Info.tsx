
import allSvg from "svg/allSvg";
import { useDispatch, useSelector } from "react-redux";
import { setInfo } from "features/Redux/reducers/loginWindowSlice";
import infoImg1 from "utils/img/infoImg/infoImg1.png"
import infoImg2 from "utils/img/infoImg/infoImg2.png"
import infoImg3 from "utils/img/infoImg/infoImg3.png"
import infoImg4 from "utils/img/infoImg/infoImg4.png"
import infoImg5 from "utils/img/infoImg/infoImg5.png"
import infoImg6 from "utils/img/infoImg/infoImg6.png"
import logo from "utils/img/logo.png";


export default function Info() {
  const dispatch = useDispatch();
  const infoWindow = useSelector((state) => state.loginWindow.info);


  return (
    <div
      className={`w-[30rem] flex flex-col items-center fixed h-[100vh] bg-white duration-[.5s] ease-in-out z-[100] overflow-scroll ${
        infoWindow ? "left-0" : "left-[-100%]"
      } `}
    >
      <img src={logo} alt="logo" className="w-20 self-start mt-[2rem] ml-[2rem]" />
      <div
        className="cursor-pointer hover:text-red-600 duration-[.3s] ease-in-out text-black absolute right-[1.5rem] top-[1.5rem]"
        onClick={() => dispatch(setInfo())}
      >
        {allSvg(35).close}
      </div>
      <div className=" pt-[1rem] text-black w-[90%]">
        <div className="flex flex-col gap-[.5rem] mb-[.5rem]">
          <h3 className="font-bold text-lg">About Us</h3>
          <p>
            Welcome to BKK Gym, your premier fitness destination in Bangkok! We
            offer state-of-the-art facilities, diverse classes, and expert
            trainers to help you achieve your health goals. Join our vibrant
            community and let’s reach new heights together!
          </p>
        </div>
        <div className="flex flex-col gap-[.5rem] mb-[.5rem]">
          <h3 className="font-bold text-lg">Gallery</h3>
          <div className="grid-cols-3 grid gap-[.5rem]">
            <img src={infoImg1} alt="logo"></img>
            <img src={infoImg3} alt="logo"></img>
            <img src={infoImg4} alt="logo"></img>
            <img src={infoImg5} alt="logo"></img>
            <img src={infoImg6} alt="logo"></img>
            <img src={infoImg2} alt="logo"></img>
          </div>
        </div>
        <div className="flex flex-col gap-[.5rem] mb-[.5rem]">
          <h3 className="font-bold text-lg">Contact Info</h3>
          <div className="flex flex-col">
            <p>100 Sathon Rd, Khwaeng Silom, Bangkok</p>
            <p>+66-000-000</p>
            <p>bbkgym@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-[.5rem] mb-[.5rem]">
          <h3 className="font-bold text-lg">Follow Us</h3>
          <div className="flex items-center gap-2">
            <a
              className="cursor-pointer hover:text-red-600 duration-[.4s] "
              href="/home"
            >
              {allSvg(25).linkedin}
            </a>
            <a
              className="cursor-pointer hover:text-red-600 duration-[.4s] "
              href="/home"
            >
              {allSvg(25).twitter}
            </a>
            <a
              className="cursor-pointer hover:text-red-600 duration-[.4s] "
              href="/home"
            >
              {allSvg(25).facebook}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
