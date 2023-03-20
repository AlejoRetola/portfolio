import Image from "next/image";
import { MdOutlineWavingHand } from "react-icons/md";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useState, useEffect } from "react";

export default function NotHome() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
      if (scrollPosition > 25) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="home" className="w-full h-screen flex flex-col">
        <div className="w-full h-full max-h-[94%] mt-16 lg:mt-0 flex flex-wrap mx-auto items-center justify-center px-2  gap-4 lg:flex-nowrap font-OpenSans">
          {/*TEXT DIV */}
          <div className="w-[95%] xs:w-3/5 lg:w-3/6 flex flex-col ml-2 gap-1">
            <h1 className="text-3xl lg:text-5xl font-light ">Hi there! 👋</h1>
            <h2 className="text-2xl lg:text-4xl font-semibold">I am </h2>
            <div className="mt-1 h-20 overflow-hidden">
              <div className="h-full animate-move flex items-center">
                <h2 className="text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-400 py-2">Alejo Retola</h2>
              </div>
              <div className="h-full animate-move flex items-center">
                <h2 className="text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-400 py-2">Front-end Dev</h2>
              </div>
            </div>

            <p className="font-semibold text-md md:text-lg ">I am a Web Developer based in Bs As , Argentina. Working towards learning more about coding and having fun in the journey.</p>
          </div>
          {/* SVG DIV  */}
          <div className="w-[95%] sm:w-3/6 h-[200px]  md:min-h-[350px] mr-2 relative">
            <Image src="/programming.svg" fill className="object-contain p-3"></Image>
          </div>
        </div>
        {showArrow ? (
          <div className="text-2xl text-center flex justify-center animate-bounce text-slate-100 visible ">
            <AiOutlineArrowDown className="bg-indigo-500 rounded-full bg-opacity-80 " />
          </div>
        ) : (
          <div className="text-2xl text-center flex justify-center animate-bounce text-slate-100 invisible ">
            <AiOutlineArrowDown className="bg-indigo-500 rounded-full bg-opacity-80 " />
          </div>
        )}
      </div>
    </>
  );
}
