import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Heloo VG",
    image: assets.profile_pic,
    email: "jaskdjk@gmail.com",
    phone: "278937237",
    address: {
      line: "32 djsk dkjsk",
      line2: " india",
    },
    gender: "male",
    dob: "2000-01-20",
  });
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={userData.image}></img>
      {isEdit ? (
        <input className="bg-gray-200 text-3xl font-medium max-w-60 mt-4"
          value={userData.name}
          type="text"
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        ></input>
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">{userData.name}</p>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none"></hr>

      <div>
        <p className="text-neutral-500 underline mt-3">Contact Info</p>

        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium" >Email id:</p>
          <p className="text-blue-500">{userData.email}</p>

          <p className="font-medium">Phone:</p>

          {isEdit ? (
            <input
              value={userData.phone}
              type="text"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
            ></input>
          ) : (
            <p className="text-blue-500">{userData.phone}</p>
          )}

          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line: e.target.value },
                  }))
                }
                type="text"
                value={userData.address.line}
              ></input>
              <br></br>

              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                type="text"
                value={userData.address.line2}
              ></input>
            </p>
          ) : (
            <p>
              {userData.address.line}
              <br></br>
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      <div >
        <p className="text-neutral-500 underline mt-3">Bacix Information</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value={"Male"}>Male</option>
              <option value={"Female"}>Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}
          <p className="font-medium">Birthday</p>
          {isEdit ? (
            <input className="max-w-28 bg-gray-100"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              type="date"
              value={userData.dob}
            />
          ) : (
            <p>{userData.dob}</p>
          )}
        </div>
      </div>
      <div className="mt-10">
        {isEdit ? (
          <button className="border rounded-full border-primary px-8 py-2" onClick={() => setIsEdit(false)}>Save Information</button>
        ) : (
          <button className="border rounded-full border-primary px-8 py-2" onClick={() => setIsEdit(true)}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
