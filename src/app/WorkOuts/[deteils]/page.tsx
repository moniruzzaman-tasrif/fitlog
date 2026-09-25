import DeteilsButton from "@/component/siteShare/DeteilsButton";
import { IRootDataType } from "@/DataType";
import Image from "next/image";
import { useContext } from "react";
import { FiBookmark, FiCalendar } from "react-icons/fi";

interface paramsType {
  params: Promise<{ deteils: string }>;
}

const page = async ({ params }: paramsType) => {

  const { deteils } = await params;

  const datafetch = async (): Promise<IRootDataType> => {
    const res = await fetch(
      `https://api.abcz.workers.dev/api/fitlog/${deteils}`,
    );
    const data = await res.json();
    return data;
  };
  const data = await datafetch();
  const dataArr: IRootDataType[] = [data];




  return (
    <div className="">
      {dataArr.map((item: IRootDataType) => (
        <div className="" key={item.id}>
          <div className="min-h-screen bg-[#0b0e14] text-white p-4 md:p-8 lg:p-12 flex items-center justify-center max-w-350 mx-auto">
            {/* Main Card Container */}
            <div className="card lg:card-side  shadow-2xl rounded-3xl   w-full p-6 md:p-8 gap-8 items-center  ">
              {/* Left Side: Responsive Image Container */}
              <figure className="relative top-[-20] w-full lg:w-112.5 h-87.5 md:h-155.5 rounded-2xl overflow-hidden shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  priority
                />
              </figure>

              {/* Right Side: Content & Info */}
              <div className="card-body p-0 w-full flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <h1 className="text-2xl md:text-3xl font-black uppercase tracking-wide text-white mb-2">
                    {item.name}
                  </h1>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Muscle Groups Badges */}
                  <div className="flex items-center gap-2 mb-6 flex-wrap">
                    {item.muscleGroups.map(group => (
                      <span
                        key={group}
                        className="badge bg-[#ccff00] text-black font-extrabold uppercase text-xs border-0 px-3 py-2 rounded-lg"
                      >
                        {group}
                      </span>
                    ))}
                  </div>

                  {/* Data Table / List Section */}
                  <div className="bg-[#10131b] rounded-2xl p-4 border border-gray-800/60 space-y-3 mb-6 text-sm">
                    <div className="flex justify-between items-center border-b border-gray-800/40 pb-2">
                      <span className="text-gray-400 uppercase text-xs font-semibold tracking-wider">
                        Equipment
                      </span>
                      <span className="font-bold text-white">
                        {item.equipment}
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-800/40 pb-2">
                      <span className="text-gray-400 uppercase text-xs font-semibold tracking-wider">
                        Difficulty
                      </span>
                      <span className="font-bold text-white">
                        {item.difficulty}
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-800/40 pb-2">
                      <span className="text-gray-400 uppercase text-xs font-semibold tracking-wider">
                        Sets
                      </span>
                      <span className="font-bold text-white">{item.sets}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-800/40 pb-2">
                      <span className="text-gray-400 uppercase text-xs font-semibold tracking-wider">
                        Reps
                      </span>
                      <span className="font-bold text-white">{item.reps}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-800/40 pb-2">
                      <span className="text-gray-400 uppercase text-xs font-semibold tracking-wider">
                        Duration
                      </span>
                      <span className="font-bold text-white">
                        {item.duration} min
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-800/40 pb-2">
                      <span className="text-gray-400 uppercase text-xs font-semibold tracking-wider">
                        Calories
                      </span>
                      <span className="font-bold text-white">
                        {item.caloriesBurned} kcal
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 uppercase text-xs font-semibold tracking-wider">
                        Rating
                      </span>
                      <span className="font-bold text-white">
                        {item.rating}
                      </span>
                    </div>
                  </div>

                  {/* Instructions Section */}
                  <div className="mb-6">
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-white mb-3">
                      Instructions
                    </h3>
                    <ol className="space-y-2 text-xs md:text-sm text-gray-300">
                      {item.instructions.map((step, index) => (
                        <li key={index} className="leading-relaxed">
                          <span className="font-bold text-[#626262] mr-2">
                            {index + 1}.
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                {/* Action Buttons */}
                <DeteilsButton
                  deteilsData={item}
                  itemData={dataArr}
                ></DeteilsButton>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
