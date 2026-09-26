import Image from "next/image";
import BanarImg from "../../assets/banner.png";

const Banar = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6 md:py-10">
      <div className="hero bg-[#15171D] py-10 sm:py-15 px-4 sm:px-8 lg:px-12 max-w-[1400px] mx-auto mt-10 md:mt-20 rounded-3xl md:rounded-4xl border border-[#232323d0]">
        <div className="hero-content flex-col w-full justify-between lg:flex-row-reverse gap-8 lg:gap-12 p-0">
          <div className="relative w-full max-w-[280px] sm:max-w-sm aspect-square mx-auto lg:mx-0 shrink-0">
            <Image
              alt="Banar img hero"
              src={BanarImg}
              fill
              className="object-contain"
            />
          </div>
          <div className="w-full lg:max-w-[600px] text-center lg:text-left">
            <h3 className="text-[#C2F800] mb-3 sm:mb-5 font-bold tracking-wider text-xs sm:text-sm uppercase">
              WORKOUT LIBRARY
            </h3>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>
            <p className="py-4 sm:py-6 text-gray-400 text-sm sm:text-base leading-relaxed">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>
            <button className="btn bg-[#C2F800] hover:bg-[#b3e600] text-black font-extrabold shadow-none border-none px-6 py-3 h-auto text-xs sm:text-sm rounded-xl w-full sm:w-auto">
              BROWSE WORKOUTS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banar;
