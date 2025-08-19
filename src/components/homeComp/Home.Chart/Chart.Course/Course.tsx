import { Link } from "react-router-dom";
import allSvg from "svg/allSvg";

export default function Course({ img, level, price, des }) {
  return (
    <div className="flex flex-col group relative w-[25rem] h-[40rem] z-[1] shadow-lg">
      <div className=" w-full h-[16rem] overflow-hidden">
        <img
          src={img}
          className=" grayscale-[1] duration-[.4s]
            bg-bg-class-4 group-hover:grayscale-[0] "
            alt="img"
        ></img>
      </div>
      <div className="flex flex-col w-full p-2 mt-5">
        <h3 className="bg-white absolute top-[35%] right-1/2 translate-x-1/2 px-6 py-2 font-bold">
          {level}
        </h3>
        <div className="text-3xl text-gray-600">
          $ <b className="text-5xl text-black">{price}</b> p/m
        </div>
        <p className="mt-4 h-[6rem]">{des}</p>
        <Link className="button-class self-center mt-10">
          PURCHASE NOW {allSvg(20).arrow}
        </Link>
      </div>
    </div>
  );
}
