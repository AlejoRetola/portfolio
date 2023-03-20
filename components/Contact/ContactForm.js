import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

export default function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_f84eeqt", "template_0251zh1", form.current, "XpqxxDJjz0HLm1k_1").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <div className="h-full w-[90%] xs:w-3/5 lg:w-3/6 bg-white">
      <h1 className="pt-5 font-semibold text-3xl text-center underline underline-offset-4 decoration-indigo-700">Send me a Message 🙋‍♂️!</h1>
      <form className="flex flex-col w-full gap-2 px-5 pb-5 pt-10 shadow-xl " onSubmit={sendEmail} ref={form}>
        <label htmlFor="from_name" className="text-sm font-semibold">
          Name
        </label>
        <input type="text" minLength={3} required id="from_name" name="from_name" placeholder="Adam" className="p-1 border-2   rounded focus:ring-2 ring-blue-600 focus:outline-none"></input>
        <label htmlFor="email" className="text-sm font-semibold">
          Email
        </label>
        <input
          type="email"
          minLength={10}
          required
          id="email"
          name="reply_to"
          placeholder="alejoretola2001@gmail.com"
          className="p-1 border-2   rounded focus:ring-2 ring-blue-600 focus:outline-none"
        ></input>
        <label htmlFor="message" className="text-sm font-semibold">
          Message
        </label>
        <textarea
          type="text"
          name="message"
          required
          minLength={10}
          maxLength={150}
          id="message"
          rows={5}
          placeholder="Subject...."
          className="p-1 border-2   rounded focus:ring-2 ring-blue-600 focus:outline-none"
        ></textarea>
        <button className="rounded bg-gradient-to-r from-blue-700 to-purple-700 text-white p-2 transition focus:scale-[1.01] "> Submit</button>
      </form>
    </div>
  );
}
