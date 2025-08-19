import topImg from "utils/img/topImg.jpeg";

export default function TopComp({ des }) {
  return (
    <div className="w-full">
      <div className="bg-black text-white h-[20rem] w-full flex flex-col items-center justify-end relative">
        <img src={topImg} className="absolute"
        alt="img"></img>
        <h3 className="mb-8 text-3xl font-bold z-10">{des}</h3>
      </div>
    </div>
  );
}
