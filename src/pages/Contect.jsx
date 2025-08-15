import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p className="text-gray-700 font-semibold">Contact Us</p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img className="w-full md:max-w-[360px] " src={assets.contact_image}></img>
        
      <div className="flex flex-col justify-center items-start gap-6">
        <p>Our Office</p>
        <p>11 Madhya Pradesh india </p>
        <p>mb: 1212121212</p>
        <p>email: adjasdj@gmail.com Pradesh</p>
        <p>Career at Us</p>
        <p>"Hello" is a song recorded by British singer</p>
        <button className="border border-black  py-4 px-8 text-sm hover:bg-black  hover:text-white transition-all duration-300">Explore Jobs</button>

        </div>

      </div>
    </div>
  );
};

export default Contact;
