import Form from "./ContactForm";
import { ImLinkedin, ImGithub } from "react-icons/im";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col gap-5" id="contact">
        <h1 className="text-5xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500 py-4 ">Contact me</h1>
        <div className="w-full h-full flex flex-col items-center justify-center ">
          <Form />
        </div>
        <div className="flex flex-col text-center gap-2 mb-4">
          <h2 className="text-2xl">Also you can find me at</h2>
          <div className="flex  justify-center items-center gap-5 text-3xl">
            <Link href={"https://www.linkedin.com/in/alejo-retola-noya-a541a6198/"} target="_blank">
              <ImLinkedin className="text-blue-600" />
            </Link>
            <Link href={"https://github.com/AlejoRetola"} target="_blank">
              <ImGithub />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
