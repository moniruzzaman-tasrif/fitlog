import Image from "next/image";
import BanarImg from "../../assets/banner.png";

const Banar = () => {
  return (
    <div className="">
      <div className="hero bg-[#15171D] py-15 max-w-350 mx-auto mt-20 rounded-4xl border border-[#232323d0] ">
        <div className="hero-content flex-col w-full  justify-between lg:flex-row-reverse">
          <Image alt="Banar img hero  " src={BanarImg} className="max-w-sm  " />
          <div className="max-w-150">
            <h3 className="text-[#C2F800] mb-5"> WORKOUT LIBRARY</h3>
            <h1 className="text-5xl font-bold text-white">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>
            <p className="py-6 text-gray-500">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>
            <button className="btn bg-[#C2F800] shadow-none border-none p-2 ">
              BROWSE WORKOUTS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banar;
