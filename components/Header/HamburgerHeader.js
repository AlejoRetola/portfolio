import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Hamburguer() {
  const [trans, setTrans] = useState(true);

  function handleClick() {
    setTrans(!trans);
    const canvas = document.getElementById("off-canvas");
    if (trans) {
      canvas.classList.remove("translate-x-[1000px]");
      canvas.classList.add("translate-x-[90%]");
    } else {
      canvas.classList.remove("translate-x-[90%]");
      canvas.classList.add("translate-x-[1000px]");
    }
  }

  return (
    <>
      <header className="w-full mx-auto shadow-lg bg-white font-OpenSans fixed top-0 z-50 visible md:invisible">
        <div className="">
          <div className=" flex justify-between items-center">
            <h2 className="text-3xl p-2 font-semibold ">ARN</h2>
            <button className="p-2 text-2xl" onClick={handleClick}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
        <div className="w-2/3 flex flex-start flex-col justify-end absolute bg-white shadow-xl translate-x-[1000px] transition delay-200" id="off-canvas">
          <div className="w-full flex flex-col gap-4  font-semibold  py-1 ">
            <Link href="#home" className="px-2 " scroll={false}>
              Home
            </Link>
            <Link href="#services" className="px-2 " scroll={false}>
              About
            </Link>
            <Link href="#projects" className="px-2" scroll={false}>
              Projects
            </Link>
            <Link href="#contact" className="px-2 mb-2" scroll={false}>
              Contact
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
