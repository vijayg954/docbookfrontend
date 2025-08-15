import React from "react";
// import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate=useNavigate()
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left  */}
        <div>
          {/* <img className="mb-5 w-40" src={assets.logo}></img>
           */}
                 <p onClick={() => navigate("/")} className="w-32 text-2xl text-blue-500 border flex justify-center rounded-xl bg-gray-50 py-2 mx-2">Prescript</p>

          <p className="w-full text-gray-600 md:w-2/3 leading-6">
            jkdslfj klfjskld dsklafjklsd kloidsjfkl rti dskgjh dssoigh irthg
            hdsh heoiryoie askjklwei4y adsz ihytoi afoihy eiu fi fafbbue{" "}
          </p>
        </div>

        {/* center  */}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className=" flex flex-col  gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* right  */}
        <div>
          <p className="text-xl font-medium mb-5">Get In Touch</p>
          <ul className=" flex flex-col  gap-2 text-gray-600">
            <li>73981273739</li>
            <li>dasd@ajdklj.com</li>
          </ul>
        </div>
      </div>
      {/* copyright */}
      <div>
        <hr></hr>
        <p className="py-5 text-sm text-center">
          Copyright 2025@ vg -All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
