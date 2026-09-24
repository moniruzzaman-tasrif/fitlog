import { IRootDataType } from '@/DataType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { HiOutlineClock } from 'react-icons/hi';
import { SlFire } from 'react-icons/sl';

const dataPromis = async (): Promise<IRootDataType[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  return res.json();
};

const HomePageData =async () => {
const fetchData = await dataPromis();
console.log(fetchData.length);

  return (
    <div>
      <div className=" max-w-350 mx-auto mt-20">
        <div className="">
          <h1 className="text-4xl font-bold text-white">THE LIBRARY</h1>
          <p className=" text-gray-400 mt-2">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full mx-auto mt-15 ">
          {fetchData.map((data: IRootDataType) => (
            <Link href={`/WorkOuts/${data.id}`} key={data.id}>
              <div className="card bg-[#151922] text-white shadow-xl rounded-3xl overflow-hidden border-2 border-gray-800/80">
                {/* Top Image Section */}
                <figure className="px-4 pt-4">
                  <div className="relative w-full h-52 rounded-2xl overflow-hidden">
                    <Image
                      src={data.image}
                      alt={data.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>

                {/* Content Section */}
                <div className="card-body p-5">
                  {/* Muscle Group Badges */}
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    {data.muscleGroups.map(group => (
                      <span
                        key={group}
                        className="badge bg-[#ccff00] text-black font-extrabold uppercase text-xs border-0 px-3 py-2 rounded-lg"
                      >
                        {group}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="card-title text-xl font-black tracking-wide uppercase text-white mt-1">
                    {data.name}
                  </h2>

                  {/* Equipment Subtitle */}
                  <p className="text-gray-400 text-sm mb-4">{data.equipment}</p>

                  {/* Footer Statistics */}
                  <div className="border-t border-gray-800/80 pt-4 flex items-center justify-between text-xs text-gray-300 font-medium">
                    <div className="flex items-center gap-1.5">
                      <HiOutlineClock className="w-4 h-4 text-gray-400" />
                      <span>{data.duration} min</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <SlFire className="w-4 h-4 text-gray-400" />
                      <span>{data.caloriesBurned} kcal</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <FaRegStar className="w-4 h-4 text-gray-400" />
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
