"use client";

import { dataContext } from "@/context";
import { IRootDataType } from "@/DataType";
import React, { useContext } from "react";
import { FiBookmark, FiCalendar } from "react-icons/fi";
import { Bounce, toast } from "react-toastify";
interface buttendataType {
  deteilsData: IRootDataType,
  plan: IRootDataType[],
  setPlan: React.Dispatch<React.SetStateAction<IRootDataType[]>>,
  save: IRootDataType[],
  setSave: React.Dispatch<React.SetStateAction<IRootDataType[]>>,

}

const DeteilsButton = ({ deteilsData }:buttendataType) => {
  const Context = useContext(dataContext);

  if (!Context) {
    throw new Error("DeteilsButton must be used within a dataContext provider");
  }

  const { plan, setPlan } = Context;
  const { save, setSave } = Context;

  const handePlan = () => {

    const planFilter = plan.some(planItem => planItem.id === deteilsData.id);
    console.log(planFilter);
 if (!planFilter){
setPlan([...plan, deteilsData]);
 toast.success("Plan Added Successfully! 🎉", {
   position: "top-right",
   autoClose: 5000,
   hideProgressBar: false,
   closeOnClick: false,
   pauseOnHover: true,
   draggable: true,
   progress: undefined,
   theme: "light",
   transition: Bounce,
 });
 }else{
    toast.error("Plan Already Exists", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
 }

  };
  const handeSave = () => {
    const saveFilter = save.some(saveItem => saveItem.id === deteilsData.id);

    if (!saveFilter){
 setSave([...save, deteilsData]);
 toast.success("Save Successfully! 🎉", {
   position: "top-right",
   autoClose: 5000,
   hideProgressBar: false,
   closeOnClick: false,
   pauseOnHover: true,
   draggable: true,
   progress: undefined,
   theme: "light",
   transition: Bounce,
 });
    }else{
    toast.error("Save Already Exists", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    }
  };


  // console.log(plan);
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
        <button
          onClick={ handePlan}
          className="btn bg-[#ccff00] hover:bg-[#b3e600] text-black font-bold border-0 w-full sm:flex-1 rounded-xl flex items-center justify-center gap-2"
        >
          <FiCalendar className="w-4 h-4" />
          Add to today&apos;s plan
        </button>
        <button
          onClick={handeSave}
          className="btn bg-[#1a1f2c] hover:bg-[#222838] text-white border border-gray-700 w-full sm:w-auto px-6 rounded-xl flex items-center justify-center gap-2"
        >
          <FiBookmark className="w-4 h-4" />
          Save for later
        </button>
      </div>
    </div>
  );
};

export default DeteilsButton;
