import React from "react";
import Image from "next/image";
import contact from "../../../public/images/contact.jpg";
import Email from "@/icons/Email";
import Call from "@/icons/Call";
import Location from "@/icons/Location";

const page = () => {
  return (
    <div className="h-screen relative ">
      <Image fill src={contact} className="object-cover" alt="contact" />

      <div className=" absolute h-screen flex justify-center items-center flex-col w-full">

        <h1 className="font-extrabold text-4xl p-10 text-amber-950">CONTACT US</h1>

        <h2 className="italic text-1xl text-amber-950 "> "Let's discuss your needs. Contact us! we'd love to hear from you!
          Whether you have a question, feedback, or just want to say hello, feel free to reach out.</h2>
          <h2 className="italic text-1xl text-amber-950 pb-14"> "Get in Touch," "We're Here to Help," "Contact Us for Support," or "Let's Connect." .</h2>


        <div className="flex justify-center items-center gap-7 p-15 bg-gray-200/40   text-amber-950/90 rounded-3xl  ">
          <Email className="size-11" />

          <div className="flex-col">
            <h1 className="font-bold flex justify-center">EMAIL</h1>
            <h2 className="italic">rizafasli696@gmail.com</h2>
          </div>
          <Call className="size-10 " />

          <div className="flex-col ">
            <h1 className="font-bold flex justify-center">CALL</h1>
            <h2 className="italic">+91 9895268676</h2>
          </div>

          <Location className="size-10" />

          <div className="flex-col">
            <h1 className="font-bold flex justify-center">ADDRESS</h1>
            <h1 className="italic">Madathil Manniyadath House p.o kakkad,kunhippalli</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
