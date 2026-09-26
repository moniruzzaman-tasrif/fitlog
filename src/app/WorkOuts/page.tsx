import { IRootDataType } from "@/DataType";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegStar } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi";
import { SlFire } from "react-icons/sl";

const dataPromis = async (): Promise<IRootDataType[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  return res.json();
};

const HomePageData = async () => {
  const fetchData = await dataPromis();

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="max-w-[1400px] mx-auto mt-10 md:mt-20">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide">
            THE LIBRARY
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-2">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  sm:gap-6 w-full mx-auto mt-8 md:mt-15">
          {fetchData.map((data: IRootDataType) => (
            <Link
              href={`/WorkOuts/${data.id}`}
              key={data.id}
              className="w-full"
            >
              <div className="card bg-[#151922] text-white shadow-xl rounded-3xl overflow-hidden border-2 border-gray-800/80 w-full h-full flex flex-col">
                <figure className="px-4 pt-4">
                  <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden">
                    <Image
                      src={data.image}
                      alt={data.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>

                <div className="card-body p-4 sm:p-5 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      {data.muscleGroups.map(group => (
                        <span
                          key={group}
                          className="badge bg-[#ccff00] text-black font-extrabold uppercase text-[10px] sm:text-xs border-0 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg"
                        >
                          {group}
                        </span>
                      ))}
                    </div>

                    <h2 className="card-title text-lg sm:text-xl font-black tracking-wide uppercase text-white mt-1">
                      {data.name}
                    </h2>

                    <p className="text-gray-400 text-xs sm:text-sm mb-4">
                      {data.equipment}
                    </p>
                  </div>

                  <div className="border-t border-gray-800/80 pt-4 flex items-center justify-between text-xs text-gray-300 font-medium">
                    <div className="flex items-center gap-1.5">
                      <HiOutlineClock className="w-4 h-4 text-gray-400 shrink-0" />
                      <span>{data.duration} min</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <SlFire className="w-4 h-4 text-gray-400 shrink-0" />
                      <span>{data.caloriesBurned} kcal</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <FaRegStar className="w-4 h-4 text-gray-400 shrink-0" />
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageData;
