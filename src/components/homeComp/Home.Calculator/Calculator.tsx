import allSvg from "svg/allSvg";
import bmi from "../img/bmi.png";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { calculate } from "features/Redux/reducers/indexSlice";

export default function Calculator() {
  const dispatch = useDispatch();
  const bodyIndex = useSelector((state) => state.bodyIndex);

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  return (
    <div className="flex justify-center items-center  bg-black text-white  my-6">
      <div className="flex common-wrapper gap-8 py-14 relative">
        <div className="flex flex-col gap-5 w-[28rem]">
          <h3 className="text-4xl">
            Let's Calculate Your <b className="text-red-600">BMI</b>
          </h3>
          <p className="text-gray-400">
            Easily determine your body mass index with our accurate calculation
            tool.
          </p>
          <div className="flex flex-col gap-6 z-10">
            <div className="flex gap-4">
              <input
                placeholder="Weight / kg"
                className={`px-4 py-2 bg-black border-neutral-500 border-2 ${
                  /[a-zA-Z]/.test(weight) ? "border-red-600" : ""
                }`}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              ></input>
              <input
                placeholder="Height / cm"
                className={`px-4 py-2 bg-black border-neutral-500 border-2 ${
                  /[a-zA-Z]/.test(height) ? "border-red-600" : ""
                }`}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              ></input>
            </div>
            <div className="flex gap-4">
              <div className="w-[50%] flex">
                <h4>
                  Your BMI is: <b>{bodyIndex.bmi}</b>
                </h4>
              </div>
              <div className="w-[50%] flex">
                <h4>
                  Your weight is: <b>{bodyIndex.weight}</b>
                </h4>
              </div>
            </div>
            <button
              className="button-class"
              disabled={
                /[a-zA-Z]/.test(height) ||
                /[a-zA-Z]/.test(weight) ||
                weight === "" ||
                height === ""
              }
              onClick={() =>
                dispatch(
                  calculate({
                    weight: parseInt(weight),
                    height: parseInt(height),
                  })
                )
              }
            >
              Calculate {allSvg(20).arrow}
            </button>
          </div>
        </div>
        <div className="w-[50%] flex justify-end ">
          <img className="h-[25rem] absolute top-0" src={bmi} alt="img"></img>
        </div>
      </div>
    </div>
  );
}
