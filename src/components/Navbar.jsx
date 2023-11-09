import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

const Navbar = () => {
  return (
    <div className="flex items-center h-14 bg-[#313131] justify-between p-3">
      <span className="font-bold text-[#ddddf7]">Telegram copy</span>
      <div className="flex gap-3">
        <img
          className="bg-[#ddddf7] h-6 w-6 rounded-full object-cover"
          src="https://static.tildacdn.com/tild6161-3461-4630-b363-366630623461/photo.jpg"
          alt=""
        />
        <span>Lily</span>
        <button
          onClick={() => signOut(auth)}
          className="py-1 px-3 text-xs rounded-xl bg-[#8774e1] hover:opacity-90 transition-opacity"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
