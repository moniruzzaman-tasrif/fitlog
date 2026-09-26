import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <footer className="w-full bg-[#0b0e14] border-t border-gray-800/80 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <Link href="/" className=" flex items-center gap-4">
            <Image src={Logo} alt=""></Image>
            <span className="  text-xl text-white">FITLOG</span>
          </Link>
        </div>
        <p className="text-gray-500 text-xs sm:text-sm">
          &copy; 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
