import logo from "utils/img/logo.png";
import Links from "components/shared/Links";

export default function Footer() {
  return (
    <div className="page-class flex">
      <div className="flex justify-between w-full max-w-[60rem] items-center mx-[2rem] py-[4rem]">
        <div className="flex flex-col w-[20rem] gap-4 items-center text-center text-gray-500">
          <img src={logo} className="w-28 flex"
          alt="img" />
          <div>
            Revitalize your health journey on our one-year anniversary! Unleash
            your full fitness potential with our tailored program.
          </div>
          <Links />
          <div className="flex">
            <h3 className=" pr-2 border-r-[1.5px] border-r-[#000] cursor-pointer  transition-colors duration-500  hover:text-red-600">
              Privacy Policy
            </h3>
            <h3 className="pl-2">© 2023 BKK gym</h3>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className=" text-2xl font-bold">Our Classes</h2>
          <ul className="flex flex-col gap-4 text-gray-500">
            <li className="cursor-pointer  transition-colors duration-500  hover:text-red-600">
              Fitness Classes
            </li>
            <li className="cursor-pointer  transition-colors duration-500  hover:text-red-600">
              Groove Cardio
            </li>
            <li className="cursor-pointer  transition-colors duration-500  hover:text-red-600">
              Core Harmony
            </li>
            <li className="cursor-pointer  transition-colors duration-500  hover:text-red-600">
              Zen Flex
            </li>
            <li className="cursor-pointer  transition-colors duration-500  hover:text-red-600">
              Strength & Sculpt
            </li>
          </ul>
        </div>
        <div className="flex gap-4 flex-col">
          <h2 className=" text-2xl font-bold">Working Hours</h2>
          <ul className="text-gray-500 flex flex-col gap-4">
            <li className="font-extrabold">Monday - Friday:</li>
            <li className="">7:00am - 23:00pm</li>
            <li className="font-extrabold">Saturday:</li>
            <li className="">8:00am - 21:00pm</li>
            <li className="font-extrabold">Sunday - Closed</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
