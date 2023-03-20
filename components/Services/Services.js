import { CgWebsite } from "react-icons/cg";
import { BsCodeSquare } from "react-icons/bs";
import { FiSmartphone } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import CardCreator from "./ServicesCards";
import { services } from "./ServicesInfo";

export default function Services() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col gap-10 " id="services">
        <div className="w-full h-full ">
          <h1 className="text-5xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500 py-2 ">Services</h1>
        </div>
        <div className="w-full h-full flex flex-wrap gap-10 justify-center mx-auto px-2 ">
          <CardCreator Icon={CgWebsite} Desc={services[0].description} Title={services[0].title} />
          <CardCreator Icon={FiSmartphone} Desc={services[1].description} Title={services[1].title} />
          <CardCreator Icon={BsCodeSquare} Desc={services[2].description} Title={services[2].title} />
          <CardCreator Icon={FaUserCircle} Desc={services[3].description} Title={services[3].title} />
        </div>
      </div>
    </>
  );
}
