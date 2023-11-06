import React from "react";
import AddAvatar from "../assets/addAvatar.png";

const Register = () => {
  return (
    <div className="bg-[#181818] h-screen flex items-center justify-center">
      <div className="bg-[#212121] py-5 px-24 rounded-xl flex flex-col gap-3 items-center">
        <span className="font-bold text-2xl text-[#8774e1]">Telegram copy</span>
        <span className="text-sm">Register</span>
        <form className="flex flex-col gap-4">
          <input
            className="p-4 outline-none border-b-2 bg-[#212121]"
            type="text"
            placeholder="Display name"
          />
          <input
            className="p-4 outline-none border-b-2 w-60 bg-[#212121]"
            type="email"
            placeholder="E-mail"
          />
          <input
            className="p-4 outline-none border-b-2 w-60 bg-[#212121]"
            type="password"
            placeholder="Password"
          />
          <input className=" hidden " type="file" id="file" />
          <label
            className="flex items-center gap-3 cursor-pointer"
            htmlFor="file"
          >
            <img className="w-8" src={AddAvatar} alt="Add Avatar" />
            <span className="text-[#8774e1]">Add an avatar</span>
          </label>
          <button className="p-3 rounded-xl bg-[#8774e1] hover:opacity-90 transition-opacity">
            Sign up
          </button>
        </form>
        <p className="text-[#8774e1]">You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
