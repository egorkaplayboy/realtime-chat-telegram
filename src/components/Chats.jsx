import { doc, onSnapshot } from "firebase/firestore";
import React from "react";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Chats = () => {
  const [chats, setChats] = React.useState([]);
  const { currentUser } = React.useContext(AuthContext);
  const { dispatch } = React.useContext(ChatContext);
  const defaultAvatar = "http://auxbonsjours.com/images/image_notyetavailable.jpg"

  React.useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };
  return (
    <div>
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            key={chat[0]}
            className="p-3 flex items-center gap-3 cursor-pointer hover:bg-[#313131] rounded-xl m-2"
            onClick={() => handleSelect(chat[1].userInfo) }
          >
            <img
              className="w-14 h-14 rounded-full object-cover"
              src={chat[1].userInfo.photoURL || defaultAvatar}
              alt="Avatar"
            />
            <div>
              <span className="text-lg font-medium">
                {chat[1].userInfo.displayName}
              </span>
              <p className="text-sm text-[#aaaaaa]">
                {chat[1].lastMessage?.text}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
