"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Logo from "../../assets/logo.png";
import { dataContext } from "@/context";

const Navber = () => {
  const NavContext = useContext(dataContext);
  const [ChaneColor, setChaneColor] = useState(false);
  if (!NavContext) return null;

  const handerClick = (dataget: string) => {
    if (dataget === "MyPlan") {
      setChaneColor(true);
    } else if (dataget === "Workouts") {
      setChaneColor(false);
    }
  };

  const { plan, save } = NavContext;

  const NavLink = (
    <>
      <li>
        <Link
          onClick={() => handerClick("Workouts")}
          className={`px-4 sm:px-6 py-2 ${ChaneColor ? "text-gray-400 hover:text-white" : "bg-[#1A2312] rounded-3xl sm:rounded-4xl text-[#C2F800]"}`}
          href="/WorkOuts"
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link
          href="/myPlan"
          onClick={() => handerClick("MyPlan")}
          className={`px-4 sm:px-6 py-2 ${
            ChaneColor
              ? "bg-[#1A2312] rounded-3xl sm:rounded-4xl text-[#C2F800]"
              : "text-gray-400 hover:text-white"
          }`}
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <div className="w-full bg-[#0C0D10] border-b-2 border-gray-800 sticky top-0 z-50">
      <div className="navbar max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 justify-between">
        <div className="navbar-start w-auto">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-1 sm:p-2"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-7 sm:w-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-[#151922] border border-gray-800 rounded-2xl z-1 mt-3 w-52 p-3 shadow-xl"
            >
              {NavLink}
            </ul>
          </div>
          <div>
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <Image
                src={Logo}
                alt="Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
              <span className="text-lg sm:text-xl font-black tracking-wider text-white">
                FITLOG
              </span>
            </Link>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 font-medium">
            {NavLink}
          </ul>
        </div>

        <div className="navbar-end w-auto flex items-center gap-3 sm:gap-6">
          <Link
            href="/myPlan"
            className="text-gray-300 flex items-center gap-1.5 sm:gap-2.5 text-xs sm:text-sm font-medium hover:text-white transition-colors"
          >
            <span>Plan</span>
            <span className="px-2 py-0.5 rounded-full text-xs font-bold flex justify-center items-center text-black bg-[#C2F800]">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/myPlan"
            className="text-gray-400 flex items-center gap-1.5 sm:gap-2.5 text-xs sm:text-sm font-medium hover:text-white transition-colors"
          >
            <span>Saved</span>
            <span className="border border-gray-700 px-2 py-0.5 text-xs font-bold text-white rounded-full">
              {save.length}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
