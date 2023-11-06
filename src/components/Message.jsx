import React from "react";

const Message = () => {
  return (
    <div className="rounded-xl flex gap-5 mb-5 owner">
      <div className="flex flex-col self-end">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src="https://static.tildacdn.com/tild6161-3461-4630-b363-366630623461/photo.jpg"
          alt=""
        />
        <span className="text-[#aaaaaa]">just now</span>
      </div>
      <div className=" bg-[#313131] max-w-[80%] flex  flex-col p-3 rounded-message owner-message">
        <p className="">hello</p>
        <img
          className="w-[50%]"
          src="https://static.tildacdn.com/tild6161-3461-4630-b363-366630623461/photo.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
