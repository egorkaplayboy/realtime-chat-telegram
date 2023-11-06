import React from "react";
import Img from "../assets/img.png";
import Attach from "../assets/attach.png";

const Input = () => {
  return (
    <div className="mt-auto py-4 flex items-center justify-around">
      <input
        className="w-3/4 bg-[#181818] rounded-full py-3 px-3 pr-3 outline-none"
        type="text"
        placeholder="Message"
      />
      <div className="flex gap-3">
        <button className="py-1 px-5 text-sm rounded-xl bg-[#8774e1] hover:opacity-90 transition-opacity">
          Send
        </button>
        <img className="w-6 cursor-pointer" src={Attach} alt="" />
        <input className="hidden" type="file" id="file" />
        <label htmlFor="file">
          <img className="w-6 cursor-pointer" src={Img} alt="" />
        </label>
      </div>
    </div>
  );
};

export default Input;
