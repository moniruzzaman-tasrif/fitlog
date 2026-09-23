"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from"../../assets/logo.png"

const Navber = () => {

  const [ChaneColor,setChaneColor]=useState(false)

  const handerClick=(dataget:string)=>{
    if (dataget === "MyPlan"){setChaneColor(true)}else if (dataget === "Workouts") {
      setChaneColor(false);
    }

  }

  const NavLink = (
    <>
      <li>
        {" "}
        <Link
          // className=" bg-[#1A2312] rounded-4xl px-6 text-[#C2F800]"
          onClick={() => handerClick("Workouts")}
          className={` px-6 ${ChaneColor ? "text-gray-500" : `bg-[#1A2312] rounded-4xl text-[#C2F800]`}`}
          href="/"
        >
          Workouts
        </Link>
      </li>
      <li>
        {" "}
        <Link
          href="/"
          onClick={() => handerClick("MyPlan")}
          className={` px-6 ${
            ChaneColor
              ? `bg-[#1A2312] rounded-4xl px-6 text-[#C2F800]`
              : "text-gray-500"
          }`}
        >
          My Plan
        </Link>
      </li>
    </>
  );
  return (
    <div className="bg-[#0C0D10] border-b-2">
      <div className="navbar  shadow-sm max-w-350 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {NavLink}
            </ul>
          </div>
          <div className=" flex items-center gap-4">
            <Image src={Logo} alt=""></Image>
            <a className="  text-xl text-white">FITLOG</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavLink}</ul>
        </div>
        <div className="navbar-end flex gap-7">
          <Link href="/" className=" text-gray-300 flex gap-3">
            {" "}
            <span>Plan</span>
            <span className=" px-2 rounded-4xl flex justify-center items-center text-black bg-[#C2F800]">
              {" "}
              0
            </span>
          </Link>
          <Link href="/" className="text-gray-500 flex gap-2  ">
            Saved
            <span className="border px-2 text-white  rounded-4xl">0</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
