"use client";

import PlanData from "@/component/siteShare/planData";
import SaveData from "@/component/siteShare/saveData";
import { dataContext } from "@/context";
import Link from "next/link";
import { useContext, useState } from "react";
import { FaFireAlt } from "react-icons/fa";
import { FiActivity, FiArrowRight, FiClock } from "react-icons/fi";

export default function MyPlanDashboard() {
  const [activeTab, setActiveTab] = useState<"todays-plan" | "saved">("saved");
  const [shorby, setshortby] = useState<"Duration" | "Calories" | "Rating">(
    "Duration",
  );
  const contextData = useContext(dataContext);
  if (!contextData) return null;
  const { plan } = contextData;
  const { save } = contextData;

  const shortplan = () => {
    const planshortData = [...plan];
    if (shorby === "Duration") {
      planshortData.sort((a, b) => b.duration - a.duration);
    } else if (shorby === "Calories") {
      planshortData.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (shorby === "Rating") {
      planshortData.sort((a, b) => b.rating - a.rating);
    }
    return planshortData;
  };

  const shortsave = () => {
    const saveshortData = [...save];
    if (shorby === "Duration") {
      saveshortData.sort((a, b) => b.duration - a.duration);
    } else if (shorby === "Calories") {
      saveshortData.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (shorby === "Rating") {
      saveshortData.sort((a, b) => b.rating - a.rating);
    }
    return saveshortData;
  };

  const planData = shortplan();
  const saveData = shortsave();

  const hasItems = activeTab === "saved" ? save.length > 0 : plan.length > 0;

  return (
    <div className="min-h-screen bg-[#0b0e14] text-white p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-wide">
            My Plan
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#151922] p-4 sm:p-6 rounded-3xl border border-gray-800/80 shadow-xl">
          <div className="flex flex-col justify-between p-2 sm:p-4 border-b sm:border-b-0 sm:border-r border-gray-800 last:border-none">
            <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold flex items-center gap-1.5">
              <FiActivity className="text-[#ccff00]" /> Exercises
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl font-black text-[#ccff00] mt-2 sm:mt-3">
              {plan.length}
            </span>
          </div>

          <div className="flex flex-col justify-between p-2 sm:p-4 border-b sm:border-b-0 sm:border-r border-gray-800 last:border-none">
            <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold flex items-center gap-1.5">
              <FiClock className="text-gray-400" /> Minutes
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-2 sm:mt-3">
              {plan.reduce((acc, ind) => acc + ind.duration, 0)}
            </span>
          </div>

          <div className="flex flex-col justify-between p-2 sm:p-4">
            <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold flex items-center gap-1.5">
              <FaFireAlt className="text-gray-400" /> Calories
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-2 sm:mt-3">
              {plan.reduce((acc, ind) => acc + ind.caloriesBurned, 0)}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center bg-[#151922] p-1.5 rounded-2xl border border-gray-800/80 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("todays-plan")}
              className={`flex-1 sm:flex-initial px-4 sm:px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "todays-plan"
                  ? "bg-[#1F242D] text-white shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`flex-1 sm:flex-initial px-4 sm:px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "saved"
                  ? "bg-[#1F242D] text-white shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center justify-between sm:justify-start gap-3 sm:gap-5 text-sm text-gray-400">
            <span className="shrink-0">Sort By</span>

            <select
              value={shorby}
              onChange={e =>
                setshortby(e.target.value as "Duration" | "Calories" | "Rating")
              }
              className="select select-bordered bg-[#151922] text-white border-gray-800 text-xs rounded-xl focus:outline-none w-full sm:w-auto"
            >
              <option>Duration</option>
              <option>Calories</option>
              <option>Rating</option>
            </select>
          </div>
        </div>

        <div
          className={`w-full transition-all ${
            hasItems
              ? "bg-transparent border-none p-0 space-y-4"
              : "bg-[#151922]/50 border border-dashed border-gray-800 rounded-3xl p-6 sm:p-10 flex flex-col items-center justify-center text-center h-80"
          }`}
        >
          {activeTab === "saved" ? (
            <div className="space-y-4 w-full">
              {save.length === 0 ? (
                <div>
                  <h3 className="text-lg sm:text-xl font-black uppercase tracking-wide text-white">
                    Nothing Here Yet
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-1">
                    Browse the library and add a lift to get today moving.
                  </p>
                  <div className="pt-3">
                    <Link
                      href="/WorkOuts"
                      className="btn bg-[#ccff00] hover:bg-[#b3e600] w-full sm:w-auto text-black font-extrabold border-0 px-8 rounded-xl shadow-lg inline-flex items-center justify-center gap-2"
                    >
                      Go to workouts
                      <FiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ) : (
                <SaveData saveProps={saveData} />
              )}
            </div>
          ) : (
            <div className="w-full space-y-4">
              {plan.length === 0 ? (
                <div className="text-center px-4">
                  <h3 className="text-lg sm:text-xl font-black uppercase tracking-wide text-white">
                    No Workouts Planned For Today
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">
                    Select exercises from your saved list to populate
                    today&apos;s routine.
                  </p>
                </div>
              ) : (
                <PlanData planProps={planData} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
