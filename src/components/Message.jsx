import React from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = React.useContext(AuthContext);
  const { data } = React.useContext(ChatContext);

  const ref = React.useRef();

  React.useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  const date = message.date.toDate();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  const time = date.getHours() + ":" + minutes;
  return (
    <div
      ref={ref}
      className={`rounded-xl flex gap-5 mb-5 ${
        message.senderId === currentUser.uid && "owner"
      }`}
    >
      <div className="flex flex-col self-end">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span className="text-[#aaaaaa]">{time}</span>
      </div>
      <div
        className={` bg-[#313131] max-w-[80%] flex  flex-col p-3 rounded-message ${
          message.senderId === currentUser.uid && "owner-message"
        }`}
      >
        <p className="">{message.text}</p>
        {message.img && <img className="w-[50%]" src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
