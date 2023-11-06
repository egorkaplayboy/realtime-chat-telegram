import React from "react";

const Chats = () => {
  return (
    <div className="">
      <div className="p-3 flex items-center gap-3 cursor-pointer hover:bg-[#313131] rounded-xl m-2">
        <img
          className="w-14 h-14 rounded-full object-cover"
          src="https://static.tildacdn.com/tild6161-3461-4630-b363-366630623461/photo.jpg"
          alt=""
        />
        <div>
          <span className="text-lg font-medium">Jane</span>
          <p className="text-sm text-[#aaaaaa]">Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
