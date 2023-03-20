import Image from "next/image";
import { MdWorkOutline } from "react-icons/md";
import ProjectCards from "./ProjectsCards";

export default function Projects() {
  return (
    <div className="max-w-screen w-full h-full" id="projects">
      <div className="flex flex-col  mb-10 items-center ">
        <h1 className="text-5xl h-16 text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-400 ">Projects</h1>
        <MdWorkOutline className="text-5xl text-indigo-500 animate-bounce " />
      </div>
      <div className="w-[90%] min-h-screen h-auto mx-auto lg:px-4 grid grid-cols-4 grid-rows-4 lg:grid-cols-7 xs:grid-rows-7 gap-2 gap-y-10 ">
        <div className="min-h-[250px] xs:min-h-[350px] md:min-h-[450px] lg:min-h-[360px] col-span-full lg:col-span-4 lg:row-span-2 rounded relative hover:ring-2 ring-black group">
          <ProjectCards
            title={"Login and Quiz"}
            desc={
              " In this website you'll be able to Sing up and Login to a page that is basicly a quiz of 10 question with points . I used Supabase along with React and Formik to create the functionality of the page, and tailwind CSS to stylice it"
            }
            url={"https://login-register-and-quiz.vercel.app/"}
            image={"/login-quiz.png"}
          />
        </div>
        <div className="col-span-full lg:col-span-3 lg:row-span-2  relative rounded  hover:ring-2 ring-black group">
          <ProjectCards
            title={"Bar menu"}
            desc={"This is a simple react page where you can filter through a menu of food. Is my first basic training with React and CSS"}
            url={"https://bar-menu-tau.vercel.app"}
            image={"/bar-menu.png"}
          />
        </div>
        <div className="col-span-full lg:col-span-3 lg:row-span-2 relative rounded  hover:ring-2 ring-black group">
          <ProjectCards
            url={"https://grocery-list-delta.vercel.app"}
            title={"Grocery List"}
            desc={"A To Do List disguised as a Grocery List just by name. It's made with React , tailwind and Local Storage"}
            image={"/GroceryList.png"}
          />
        </div>
        <div className="col-span-full lg:col-span-4 lg:row-span-2 relative rounded  hover:ring-2 ring-black group">
          {" "}
          <Image src="/project-placeholder.png" className="group-hover:opacity-70" fill></Image>
        </div>
      </div>
    </div>
  );
}
