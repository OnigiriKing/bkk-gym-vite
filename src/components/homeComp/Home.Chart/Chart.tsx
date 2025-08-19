import redBrush from "utils/img/redBrush.png";
import prices from "utils/data/prices";
import Course from "./Chart.Course/Course";

export default function Chart() {



  return (
    <div className="flex justify-center items-center  bg-white  my-6">
      <div className="flex flex-col common-wrapper items-center gap-8 text-center py-2">
        <div className="mb-4 mt-[5rem] relative w-[13rem] flex flex-col items-center">
          <p className="z-[6] font-bold text-white">PRICING CHART</p>
          <img className="absolute -top-[1rem]  z-[5] " src={redBrush} alt="img" />
        </div>
        <h3 className="text-4xl text-black font-bold">Your Pricing Plan</h3>
        <p className="text-gray-600 mb-[1rem]">
          Join Gymat today and start your journey to a healthier, stronger you.
        </p>
        {/* Price */}
        <div className="gap-10 grid grid-cols-3 items-center">
          {Object.keys(prices).map((key) => {
            const price = prices[key];

            return (
              <Course
                img={price.img}
                level={price.level}
                price={price.price}
                des={price.des}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
