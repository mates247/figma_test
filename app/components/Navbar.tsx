"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between h-[100px] items-center relative ">
      <div className="w-1/3 md:w-1/2 flex ">
        <Link href="/" className="font-bold">
          Krypto
        </Link>
      </div>
      <div className="w-full flex-1  ">
        <div
          className={`text-end w-fit ml-auto rounded-full p-2  md:hidden cursor-pointer ${!open ? "text-white bg-black" : "bg-white text-black"} transition-all duration-700 absolute top-[25px] right-[25px] z-50`}
          onClick={() => setOpen(!open)}
        >
          <GiHamburgerMenu size="40" />
        </div>
        <div className="hidden md:flex justify-between font-light ">
          <Link href="/">about</Link>
          <Link href="/">pricing</Link>
          <Link href="/">contact</Link>
          <Link href="/">buy nfts</Link>
        </div>

        <div
          className={`${!open && "translate-x-[100%]"} transition-all duration-700 bg-black flex absolute top-0 -right-[25px] w-[60vw] sm:w-[50vw] md:hidden h-[100vh] flex-col text-3xl items-center justify-center gap-8 capitalize`}
        >
          <Link href="/">about</Link>
          <Link href="/">pricing</Link>
          <Link href="/">contact</Link>
          <Link href="/">buy nfts</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
