import TopComp from "@/components/topComp/TopComp";
import React from "react";
import scheduleList from "@/utils/data/chedule";

export default function Schedule() {
  const [day, setDay] = React.useState<string>("Monday");

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <div className="w-full flex flex-col items-center">
      <TopComp des="Schedule" />
      <div className="common-wrapper pt-[4rem]">
        <div className="flex gap-[2rem] justify-center">
          {daysOfWeek.map((date) => {
            return (
              <div
                className={
                  date === day ? "button-class-day-active" : "button-class-day"
                }
                onClick={() => {
                  setDay(date);
                }}
              >
                {date}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-[.5rem] mt-[2rem]">
          {Object.entries(scheduleList[day]).map(([key, data]) => (
            <div key={key} className="bg-gray-200">
              <div className="flex justify-evenly w-full py-[1.7rem]">
                <div className="text-center">
                  <p className="text-gray-500">Name</p>
                  <p className="font-bold">{data.name}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-500">Time</p>
                  <p className="font-bold">{data.time}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-500">Trainer</p>
                  <p className="font-bold">{data.trainer}</p>
                </div>
                <button className="button-class-schedule">Join Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
