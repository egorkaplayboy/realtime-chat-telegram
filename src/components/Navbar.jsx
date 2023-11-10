import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const {currentUser} = React.useContext(AuthContext)
  const defaultAvatar = "http://auxbonsjours.com/images/image_notyetavailable.jpg"
  return (
    <div className="flex items-center h-14 bg-[#313131] justify-between p-3">
      <span className="font-bold text-[#ddddf7]">Telegram copy</span>
      <div className="flex gap-3">
        <img
          className="bg-[#ddddf7] h-6 w-6 rounded-full object-cover"
          src={currentUser?.photoURL || defaultAvatar}
          alt="Avatar"
        />
        <span>{currentUser.displayName}</span>
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
