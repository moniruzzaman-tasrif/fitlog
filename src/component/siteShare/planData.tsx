import { dataContext } from "@/context";
import { IRootDataType } from "@/DataType";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { FaFire, FaRegStar } from "react-icons/fa";
import { IoClose, IoTimeOutline } from "react-icons/io5";

const PlanData = ({ planProps }: { planProps: IRootDataType[] }) => {
  const contextData = useContext(dataContext);
  if (!contextData) return null;
  const { plan, setPlan } = contextData;
  const remove = (planData: IRootDataType) => {
    const filteerItem = plan.filter(
      (item: IRootDataType) => item.id !== planData.id,
    );
    setPlan(filteerItem);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {planProps.map(item => (
        <div className="w-full" key={item.id}>
          <div className="card bg-[#14171E] p-4 border border-gray-800 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 w-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto">
              <figure className="relative w-full sm:w-45 h-40 sm:h-30 rounded-2xl overflow-hidden shrink-0">
                <Image
                  className="object-cover"
                  src={item.image}
                  alt={item.name}
                  fill
                />
              </figure>
              <div className="flex flex-col items-start gap-2 w-full">
                <h2 className="card-title text-base sm:text-lg font-bold text-white uppercase tracking-wide">
                  {item.name}
                </h2>
                <p className="text-gray-400 text-xs sm:text-sm">
                  {item.equipment}
                </p>
                <div className="flex flex-wrap gap-4 sm:gap-6 text-xs text-gray-300 pt-1">
                  <span className="flex gap-1.5 items-center">
                    <IoTimeOutline className="text-[#CCFF00] shrink-0" />{" "}
                    {item.duration} min
                  </span>
                  <span className="flex gap-1.5 items-center">
                    <FaFire className="text-[#CCFF00] shrink-0" />
                    {item.caloriesBurned} kcal
                  </span>
                  <span className="flex gap-1.5 items-center">
                    <FaRegStar className="text-[#CCFF00] shrink-0" />
                    {item.rating}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center justify-between md:justify-center gap-2 w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-gray-800">
              <Link
                href={`/WorkOuts/${item.id}`}
                className="flex-1 sm:flex-initial"
              >
                <button className="btn border border-gray-800/80 shadow-none bg-[#14171E] hover:bg-[#1f242d] text-gray-300 text-xs rounded-2xl w-full sm:w-auto px-4">
                  View Details
                </button>
              </Link>

              <button className="btn bg-[#CCFF00] hover:bg-[#b3e600] text-black shadow-none rounded-2xl border-none text-xs font-bold px-4 flex-1 sm:flex-initial">
                <AiOutlineCheck className="font-bold shrink-0" />
                Mark as Done
              </button>

              <button
                onClick={() => remove(item)}
                className="btn bg-[#14171E] hover:bg-red-500/10 text-gray-400 hover:text-red-400 shadow-none border-none text-xl p-2 rounded-2xl shrink-0"
              >
                <IoClose />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanData;
