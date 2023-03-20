import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Card({ Icon, Desc, Title }) {
  return (
    <>
      <div className="max-w-sm min-h-[320px] flex flex-col justify-between shadow-xl group hover:shadow-2xl hover:scale-105 transition duration:200  ease-out rounded  bg-white p-6">
        <div className="flex gap-2 flex-col">
          <Icon className="text-5xl group-hover:text-blue-600" />
          <h1 className="text-xl font-semibold group-hover:text-blue-600">{Title}</h1>
          <div className="text-sm">{Desc}</div>
        </div>
        <div className="flex items-center justify-between w-full group-hover:text-blue-600">
          <a href="#home"> Read More</a>
          <div className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            <HiOutlineArrowNarrowRight />
          </div>
        </div>
      </div>
    </>
  );
}
