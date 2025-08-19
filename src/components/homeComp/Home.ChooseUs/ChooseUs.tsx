import allSvg from "svg/allSvg";
import { Link } from "react-router-dom";
import redBrush from "utils/img/redBrush.png";

export default function ChooseUs() {
  return (
    <div className="flex center justify-end items-center  bg-black pt-24 text-white relative">
      <div className="flex flex-col common-wrapper items-center gap-8 mx-4 h-full py-2">
        <div className="flex gap-10 items-center py-4 absolute -top-[3rem] bg-red-600 left-0 z-10 w-[65rem] h-[8rem] rounded-br-full">
          <h3 className="font-bold text-4xl w-[35rem] ml-[10rem]">
            We Are Always Providing Best Fitness Service For You
          </h3>
          <Link className="button-class-light">JOIN US {allSvg(20).arrow}</Link>
        </div>
        <div className="flex gap-10 justify-center items-center mt-[6rem] mb-[4rem]">
          <div className="">
            <iframe
              width="520"
              height="315"
              src="https://www.youtube.com/embed/ruX4Le0kBng?si=pB-mbMkLmWOISZqg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="flex flex-col w-[40%] gap-4">
            <div className="mb-4 relative w-[13rem] flex flex-col items-center">
              <p className="z-[6] font-bold">WHY CHOOSE US</p>
              <img
                className="absolute -top-[1rem]  z-[5] "
                alt="img"
                src={redBrush}
              />
            </div>
            <h3 className="text-3xl font-bold">
              We Can Give A Shape Of Your Body Here!
            </h3>
            <p className=" text-gray-400">
              At Gymate, we are dedicated to helping you achieve the body of
              your dreams. Our expert trainers and nutritionists will work with
              you to create a personalized fitness and nutrition plan that helps
              you reach your specific goals.
            </p>
            <div className="z-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-800 hover:bg-red-600 duration-[0.5s] p-2 rounded-full">
                    {allSvg(35).muscle}
                  </div>
                  <h5 className="font-bold text-lg">Free Power Training</h5>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-gray-800 hover:bg-red-600 duration-[0.5s] p-2 rounded-full">
                    {allSvg(35).cycling}
                  </div>
                  <h5 className="font-bold text-lg">Modern Gym Equipments</h5>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-gray-800 hover:bg-red-600 duration-[0.5s] p-2 rounded-full">
                    {allSvg(35).gymBag}
                  </div>
                  <h5 className="font-bold text-lg">Free Gym Bag</h5>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-gray-800 hover:bg-red-600 duration-[0.5s] p-2 rounded-full">
                    {allSvg(35).bottle}
                  </div>
                  <h5 className="font-bold text-lg">Fresh Bottle Watter</h5>
                </div>
              </div>
              <Link className="button-class mt-[2rem]">
                OUR CLASSES {allSvg(20).arrow}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
