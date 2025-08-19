import TopComp from "components/topComp/TopComp";
import allSvg from "svg/allSvg";
import redBrush from "utils/img/redBrush.png";
import run from "utils/img/run.png";
import ach from "utils/img/aboutImg/ach.png"
import goal from "utils/img/aboutImg/goal.png";

export default function About() {
  return (
    <div className="w-full flex flex-col items-center">
      <TopComp des="About" />
      <div className="common-wrapper pt-[4rem]">
        <div className="flex mx-[2rem] items-center">
          <div className="flex gap-6 flex-col z-10">
            <div className="relative">
              <h3 className="text-white relative z-[10] font-bold ">WHO WE ARE</h3>
              <img
                alt="img"
                className="absolute w-[12rem] -top-[.9rem] -left-[2.3rem] z-[5]"
                src={redBrush}
              />
            </div>
            <h3 className="text-3xl font-bold">
              Take Your Health And Body To Next Level
            </h3>
            <p className="text-gray-500">
              Take your health and body to the next level with our comprehensive
              program designed to help you reach your fitness goals.
            </p>
            <div className="button-class">TAKE A TOUR {allSvg(20).arrow}</div>
          </div>
          <div className="w-[60rem] flex items-center">
            <img alt="img" src={run} />
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-[4rem]">
          <div className="flex flex-col w-[90%] items-center">
            {/* first */}
            <div className="flex ">
              <div className="w-[50%] flex justify-center items-center">
                <div className="flex flex-col gap-[1rem] items-center text-center justify-center w-[50rem]">
                  <div className="text-red-600">{allSvg(60).goal}</div>
                  <h3 className="text-3xl">Our Goal</h3>
                  <p className="text-gray-500">
                    Elevating your health and happiness. We strive to help you
                    achieve a stronger body and a more fulfilling life.
                  </p>
                </div>
              </div>
              <div className="w-[50%]">
                <img alt="img" className="h-[25rem]" src={goal}></img>
              </div>
            </div>
            {/* second */}
            <div className="flex flex-row-reverse">
              <div className="w-[50%] flex justify-center items-center">
                <div className="flex flex-col gap-[1rem] items-center text-center justify-center w-[50rem]">
                  <div className="text-red-600">{allSvg(60).achievement}</div>
                  <h3 className="text-3xl">Our Achievements</h3>
                  <p className="text-gray-500">
                    Celebrating numerous fitness milestones and transformative
                    wellness journeys, we stand as a testament to strength,
                    health, and community success.
                  </p>
                </div>
              </div>
              <div className="w-[50%]">
                <img alt="img"  className="h-[25rem]" src={ach}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
