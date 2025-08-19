import allSvg from "svg/allSvg";

export function Coach({ img, name, des, width }) {
  return (
    <div className="group">
      <div className="flex justify-center grayscale group-hover:grayscale-[0] duration-[0.4s]">
        <img className={width} src={img} alt="img"></img>
        <div></div>
      </div>
      <div className="flex flex-col gap-1 py-[2rem] px-[6rem] shadow-lg relative ">
        <div className="flex justify-center bg-white pt-2 pb-6 px-5 rounded-full absolute -top-[1.7rem] right-[40%]">
          {allSvg(20).arrowSmall}
        </div>
        <h4 className="text-xl font-bold">{name}</h4>
        <p className="text-gray-500">{des}</p>
        <div className="flex justify-center gap-2 text-gray-500">
          <div className="hover:text-red-600 duration-[.4s] cursor-pointer">
            {allSvg(16).twitter}
          </div>
          <div className="hover:text-red-600 duration-[.4s] cursor-pointer">
            {allSvg(16).facebook}
          </div>
          <div className="hover:text-red-600 duration-[.4s] cursor-pointer">
            {allSvg(16).inst}
          </div>
        </div>
        <div className="h-2 bg-red-600 absolute bottom-0 left-[50%]"></div>
      </div>
    </div>
  );
}
