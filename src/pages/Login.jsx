import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("Sign Up");

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-xl">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>
          Please {state === "Sign Up" ? "sign up" : "Login"}
          to Book An Appointment
        </p>
        {state === "Sign Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-400 rounded w-full p-2 mt-1"
              type="text"
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.name)}
              required
            ></input>
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-400 rounded w-full p-2 mt-1"
            type="email"
            placeholder="email"
            value={name}
            onChange={(e) => setEmail(e.target.name)}
            required
          ></input>
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-400 rounded w-full p-2 mt-1"
            type="password"
            placeholder="password"
            value={name}
            onChange={(e) => setPassword(e.target.name)}
            required
          ></input>
        </div>

        <button className=" bg-primary text-white w-full py-2 rounded-md text-base">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p>
            Already have an account{" "}
            <span
              onClick={() => setState("Login")}
              className="text-primary underline cursor-pointer"
            >
              Login
            </span>
          </p>
        ) : (
          <p>
            Create a new account ?
            <span
              onClick={() => setState("Sign Up")}
              className="text-primary underline cursor-pointer"
            >
              click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
