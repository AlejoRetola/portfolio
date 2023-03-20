import Image from "next/image";
import { SiVercel } from "react-icons/si";
import Link from "next/link";

export default function ProjectCards({ title, desc, url, image }) {
  return (
    <div className="min-h-[250px] xs:min-h-[350px] md:min-h-[450px] lg:min-h-[360px] col-span-full lg:col-span-4 lg:row-span-2  relative rounded  hover:ring-2 ring-black group  ">
      <a href={url} target="_blank">
        <Image src={image} className="group-hover:opacity-80 object-cover" fill></Image>

        <div className="w-full h-full bg-black absolute  opacity-0 group-hover:opacity-80 z-0"></div>
        <div className="absolute invisible group-hover:visible h-full text-white transition delay-200 ease-out  ">
          <div className="w-full h-full flex justify-center items-center flex-col gap-4 z-10 ">
            <h1 className="text-center text-3xl md:text-5xl">{title}</h1>
            <p className="text-sm  text-center w-4/6">{desc}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
