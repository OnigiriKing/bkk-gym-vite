import { Link } from "react-router-dom";
import ropes from "utils/img/ropes.png"

export default function Call() {
  return (
    <div className="flex justify-center items-center  bg-black text-white  my-6">
      <div className="flex common-wrapper items-center text-center py-[4rem] h-[20rem] relative">
        <div className="z-10 flex flex-col gap-[1rem] items-start font-bold w-[70%]">
          <h3 className="text-3xl">Need a Fitness Trainer?</h3>
          <h3 className="text-2xl flex gap-1">
            <b className="text-red-600">Call:</b>+66-000-000
          </h3>
          <Link className="button-class mt-4">PURCHASE NOW</Link>
        </div>
        <div className="overflow-hidden h-[20rem] w-[55rem] absolute -right-[9rem]">
          <img className="relative bottom-[19rem]" src={ropes} alt="img"></img>
        </div>
      </div>
    </div>
  );
}
