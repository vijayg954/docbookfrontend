import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className=" ">
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          About <span className="text-gray-700 font-medium">Us</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12 ">
        <img className="w-full md:max-w-[360px]" src={assets.about_image}></img>
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-700">
          <p>
            "Hello" is a song recorded by British singer-songwriter Adele,
            released on 23 October 2015 by XL Recordings as the lead single from
            her third studio album, 25
          </p>
          <p>
            "Hello" is a song recorded by British singer-songwriter Adele,
            released on 23 October 2015 by XL Recordings as the lead single from
            her third studio album, 25
          </p>
          <p>
            "Hello" is a song recorded by British singer-songwriter Adele,
            released on 23 October 2015 by XL Recordings as the lead single from
            her third studio album, 25
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p> Why Choose Us</p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency</b>
          <p>
            "Hello" is a song recorded by British singer </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary transition-all duration-300 text-gray-600 cursor-pointer">
        
          <b>Convinience</b>
          <p> "Hello" is a song recorded by British singer</p>
        </div>
       
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization</b>
          <p> "Hello" is a song recorded by British singer</p>
        </div>
      </div>
    </div>
  );
};

export default About;
