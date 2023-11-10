import React from "react";
import Img from "../assets/img.png";
import Attach from "../assets/attach.png";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
  const [text, setText] = React.useState("");
  const [img, setImg] = React.useState(null);
  const { currentUser } = React.useContext(AuthContext);
  const { data } = React.useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);
      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId+".lastMessage"]: {
        text
      },
      [data.chatId+".date"]: serverTimestamp()
    })
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId+".lastMessage"]: {
        text
      },
      [data.chatId+".date"]: serverTimestamp()
    })

    setText("")
    setImg(null)
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSend();
  };
  return (
    <div className="mt-auto py-4 flex items-center justify-around">
      <input
        className="w-3/4 bg-[#181818] rounded-full py-3 px-3 pr-3 outline-none"
        type="text"
        placeholder="Message"
        onChange={(e) => setText(e.target.value)}
        value={text}
        onKeyDown={handleKey}
      />
      <div className="flex gap-3">
        <button
          onClick={handleSend}
          className="py-1 px-5 text-sm rounded-xl bg-[#8774e1] hover:opacity-90 transition-opacity"
        >
          Send
        </button>
        <img className="w-6 cursor-pointer" src={Attach} alt="" />
        <input
          className="hidden"
          type="file"
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img className="w-6 cursor-pointer" src={Img} alt="" />
        </label>
      </div>
    </div>
  );
};

export default Input;
