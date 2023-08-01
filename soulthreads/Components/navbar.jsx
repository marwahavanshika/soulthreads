import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="text-black body-font bg-[#acc4b2]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={"/"} className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl font-extrabold">SoulThreads</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center ">
          <Link href={"/women"} className="mr-5 hover:border-b-4 border-[#ffe7e7] font-bold" >WOMEN</Link>
          <Link href={"/men"} className="mr-5 hover:border-b-4 border-[#ffe7e7] font-bold">MEN</Link>
          <Link href={"/kids"}className="mr-5  hover:border-b-4 border-[#ffe7e7] font-bold">KIDS</Link>
          <Link href={"/about"}className="mr-5 hover:border-b-4 border-[#ffe7e7] font-bold">ABOUT US</Link>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;
