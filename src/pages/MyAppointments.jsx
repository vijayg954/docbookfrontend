import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const MyAppointments = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">MyAppointment</p>
      <div>
        {doctors.slice(0, 3).map((item, index) => (
          <div key={index} className="grid
           grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b">
            <div>
              <img className="w-32 bg-indigo-200 " src={item.image}></img>
            </div>
            <div className="flex-1">
              <p className="font-medium">{item.name}</p>
              <p className="text-zinc-700">{item.speciality}</p>
              <p className="font-medium">Address:</p>
              <p className="text-zinc-700">{item.address.line}</p>
              <p className="text-zinc-700">{item.address.line2}</p>
              <p className="font-medium">
                <span>Date & Time: </span>
                25, july 2025
              </p>
            </div>
            <div></div>
            <div className="flex justify-end flex-col gap-2">
              <button className="px-8 hover:text-white transition-all duration-300 py-2 text-sm text-stone-500 border rounded hover:bg-primary ">Pay Online</button>
              <button className="px-8 hover:text-white transition-all duration-300 py-2 text-sm text-stone-500 border rounded hover:bg-red-600 ">Cancle Appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
