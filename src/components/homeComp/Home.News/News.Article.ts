import { Link } from "react-router-dom";
import allSvg from "svg/allSvg";

export default function Article({date, name, des}) {
  return (
    <div class="flex justify-center items-center shadow-lg">
      <div class="flex flex-col gap-4 p-[2rem] items-start">
        <div class="border-[1px] border-black p-1 px-2 rounded-full font-bold">
          {date}
        </div>
        <h3 class="font-bold text-2xl h-[3rem] items-center text-left">{name}</h3>
        <p class="text-gray-600 min-h-[6rem] text-left">{des}</p>
        <Link class="button-class">READ MORE {allSvg(20).arrow}</Link>
      </div>
    </div>
  );
}
