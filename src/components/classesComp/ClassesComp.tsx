import TopComp from "components/topComp/TopComp";
import React from "react";
import allSvg from "svg/allSvg";
import classesList from "utils/data/classes";

export default function ClassesComp() {
  return (
    <div className="w-full flex flex-col items-center">
      <TopComp des="Classes" />
      <div className="common-wrapper pt-[4rem]">
        <div className="grid grid-cols-3 gap-[2.5rem] mb-[3rem]">
          {Object.keys(classesList).map((el) => {
            const gymClass = classesList[el];

            return (
              <div className=" flex bg-black text-white w-[20rem] h-[30rem] items-end z-10 relative rounded-3xl overflow-hidden font-bold">
                <img
                  src={gymClass.img}
                  className="absolute object-center object-cover w-full h-full"
                  alt="img"
                ></img>
                <div className="flex flex-col p-[2rem] justify-end gap-[1rem] z-20">
                  <div className="gap-[1rem] bg-opacity-30 bg-black w-fit">
                    <h3 className="">{gymClass.name}</h3>
                    <div className="flex gap-[1rem]">
                      <p>{gymClass.trainer}</p>
                      <p>{gymClass.time}</p>
                    </div>
                  </div>
                  <button className="button-class-light mt-[.5rem]">
                    JOIN NOW {allSvg(20).arrow}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <button className="button-class">SHOW MORE</button>
        </div>
      </div>
    </div>
  );
}
