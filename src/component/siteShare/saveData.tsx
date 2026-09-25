import { dataContext } from "@/context";
import { IRootDataType } from "@/DataType";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import { FaFire, FaRegStar } from "react-icons/fa";
import { IoClose, IoTimeOutline } from "react-icons/io5";

const SaveData = () => {
  const contextData = useContext(dataContext);

  if (!contextData) return null;

  const { save, setSave } = contextData;

  const remove = (SaveData: IRootDataType) => {
    const filteerItem = save.filter(
      (item: IRootDataType) => item.id !== SaveData.id,
    );
    setSave(filteerItem);
  };

  return (
    <div className=" flex flex-col gap-4">
      {save.map(item => (
        <div className="" key={item.id}>
          <div className="card card-side  flex gap-4 items-center bg-[#14171E] px-4 border border-gray-800">
            <figure>
              <Image
                className="w-45 h-30 rounded-2xl "
                src={item.image}
                alt={item.name}
                width={400}
                height={400}
              />
            </figure>
            <div className="card-body ">
              <div className=" flex flex-col items-start gap-4">
                <h2 className="card-title">{item.name}</h2>
                <p className="text-gray-400">{item.equipment}</p>
                <div className=" flex gap-10">
                  <span className="flex gap-2 items-center">
                    <IoTimeOutline className="text-[#CCFF00]" /> {item.duration}
                  </span>
                  <span className="flex gap-2 items-center">
                    {" "}
                    <FaFire className="text-[#CCFF00]" />
                    {item.caloriesBurned}
                  </span>
                  <span className="flex gap-2 items-center">
                    {" "}
                    <FaRegStar className="text-[#CCFF00]" />
                    {item.rating}
                  </span>
                </div>
              </div>
            </div>
            <div className="card-actions justify-center  ">
              <Link href={`/WorkOuts/${item.id}`}>
                <button className="btn border border-gray-800/80 shadow-none bg-[#14171E] text-gray-400 rounded-3xl ">
                  View Details
                </button>
              </Link>

              <button
                onClick={()=>remove(item)}
                className="btn  bg-[#14171E] text-gray-400 shadow-none border-none text-2xl"
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

export default SaveData;
