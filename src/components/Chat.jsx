import React from "react";
import Add from "../assets/add.png";
import Cam from "../assets/cam.png";
import More from "../assets/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const {data} = React.useContext(ChatContext)
  return (
    <div className="flex-22 flex flex-col">
      <div className="h-14 bg-[#313131] flex items-center justify-between p-4 text-[#aaaaaa]">
        <span>{data.user?.displayName}</span>
        <div className="flex gap-3">
          <img className="h-6 cursor-pointer" src={Cam} alt="" />
          <img className="h-6 cursor-pointer" src={Add} alt="" />
          <img className="h-6 cursor-pointer" src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
