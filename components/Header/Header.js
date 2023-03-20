import Link from "next/link";
import { useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import Hamburguer from "./HamburgerHeader";

export default function Headers() {
  return (
    <>
      <Hamburguer />
      <header className="w-full mx-auto shadow-lg bg-white font-OpenSans fixed top-0 z-50 invisible md:visible">
        <div className="flex xs:justify-between justify-center px-3 items-center xs:flex-row flex-col">
          <div className="xs:py-2">
            <h2 className="text-3xl  font-semibold ">ARN</h2>
          </div>
          <div className="flex gap-10 font-semibold  py-1 ">
            <Link href="#home" className="navbar-link-desktop" scroll={false}>
              Home
            </Link>
            <Link href="#services" className="navbar-link-desktop" scroll={false}>
              About
            </Link>
            <Link href="#projects" className="navbar-link-desktop" scroll={false}>
              Projects
            </Link>
            <Link href="#contact" className="navbar-link-desktop" scroll={false}>
              Contact
            </Link>
          </div>
          <div>
            <button className="p-2 border-2 rounded-lg bg-slate-50 text-yellow-400 ">
              <BsFillMoonFill />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
