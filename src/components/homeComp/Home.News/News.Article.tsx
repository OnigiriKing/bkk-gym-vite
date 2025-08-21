import { Link } from "react-router-dom";
import allSvg from "@/svg/allSvg";

export default function Article({date, name, des}) {
  return (
    <div className="flex justify-center items-center shadow-lg">
      <div className="flex flex-col gap-4 p-[2rem] items-start">
        <div className="border-[1px] border-black p-1 px-2 rounded-full font-bold">
          {date}
        </div>
        <h3 className="font-bold text-2xl h-[3rem] items-center text-left">{name}</h3>
        <p className="text-gray-600 min-h-[6rem] text-left">{des}</p>
        <Link className="button-class" to={"/"}>READ MORE {allSvg(20).arrow}</Link>
      </div>
    </div>
  );
}
