"use client";

import PlanData from "@/component/siteShare/planData";
import SaveData from "@/component/siteShare/saveData";
import { dataContext } from "@/context";
import Link from "next/link";
import { useContext, useState } from "react";
import { FaFireAlt } from "react-icons/fa";
import { FiActivity, FiClock,  FiArrowRight } from "react-icons/fi";


export default function MyPlanDashboard() {
  // Active tab state ("todays-plan" or "saved")
  const [activeTab, setActiveTab] = useState<"todays-plan" | "saved">("saved");


  const contextData=useContext(dataContext)
  if(!contextData)return null
  const { plan } = contextData;
  const { save } = contextData;
  console.log(plan.length)
  // Mock server statistics values (Replace these with your fetched data)
  const stats = {
    exercises: 2,
    minutes: 23,
    calories: 190,
  };

  return (
    <div className="min-h-screen bg-[#0b0e14] text-white p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <div>
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wide">
            My Plan
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Responsive 3-Column Statistics Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#151922] p-6 rounded-3xl border border-gray-800/80 shadow-xl">
          {/* Exercises Stat */}
          <div className="flex flex-col justify-between p-4 border-b md:border-b-0 md:border-r border-gray-800 last:border-none">
            <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold flex items-center gap-1.5">
              <FiActivity className="text-[#ccff00]" /> Exercises
            </span>
            <span className="text-3xl md:text-4xl font-black text-[#ccff00] mt-3">
              {stats.exercises}
            </span>
          </div>

          {/* Minutes Stat */}
          <div className="flex flex-col justify-between p-4 border-b md:border-b-0 md:border-r border-gray-800 last:border-none">
            <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold flex items-center gap-1.5">
              <FiClock className="text-gray-400" /> Minutes
            </span>
            <span className="text-3xl md:text-4xl font-black text-white mt-3">
              {stats.minutes}
            </span>
          </div>

          {/* Calories Stat */}
          <div className="flex flex-col justify-between p-4">
            <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold flex items-center gap-1.5">
              <FaFireAlt className="text-gray-400" /> Calories
            </span>
            <span className="text-3xl md:text-4xl font-black text-white mt-3">
              {stats.calories}
            </span>
          </div>
        </div>

        {/* Tabs and Controls Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Switcher Tabs */}
          <div className="flex items-center bg-[#151922] p-1.5 rounded-2xl border border-gray-800/80">
            <button
              onClick={() => setActiveTab("todays-plan")}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "todays-plan"
                  ? "bg-[#ccff00] text-black shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Today's Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "saved"
                  ? "bg-[#ccff00] text-black shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort By Dropdown using DaisyUI */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Sort By</span>
            <select className="select select-bordered bg-[#151922] text-white border-gray-800 text-xs rounded-xl focus:outline-none">
              <option>Duration</option>
              <option>Calories</option>
              <option>Rating</option>
            </select>
          </div>
        </div>

        {/* Content Box Area (Empty State or Mapped List Container) */}
        <div className="bg-[#151922]/50 border border-dashed border-gray-800 rounded-3xl p-10 md:p-5 flex flex-col items-center justify-center text-center">
          {activeTab === "saved" ? (
            <div className="space-y-4 w-full">
              {save.length === 0 ? (
                <div className="">
                  <h3 className="text-xl font-black uppercase tracking-wide text-white">
                    Nothing Here Yet
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Browse the library and add a lift to get today moving.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/workouts"
                      className="btn bg-[#ccff00] hover:bg-[#b3e600] text-black font-extrabold border-0 px-8 rounded-xl shadow-lg flex items-center justify-center gap-2 mx-auto"
                    >
                      Go to workouts
                      <FiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ) : (
                <SaveData></SaveData>
              )}
            </div>
          ) : (
            <div className=" w-full ">
              {plan.length === 0 ? (
                <div>
                  <h3 className="text-xl font-black uppercase tracking-wide text-white">
                    No Workouts Planned For Today
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Select exercises from your saved list to populate today's
                    routine.
                  </p>
                </div>
              ) : (
                <PlanData></PlanData>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
