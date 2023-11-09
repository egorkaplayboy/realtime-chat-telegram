import React from "react";
import AddAvatar from "../assets/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [err, setErr] = React.useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, 'userChats', res.user.uid), {})
            navigate('/')
          } catch (err) {
            console.log(err);
            setErr(true);
          }
        });
      });
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="bg-[#181818] h-screen flex items-center justify-center">
      <div className="bg-[#212121] py-5 px-24 rounded-xl flex flex-col gap-3 items-center">
        <span className="font-bold text-2xl text-[#8774e1]">Telegram copy</span>
        <span className="text-sm">Register</span>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          {err && <span>Something went wrong</span>}
        </form>
        <p className="text-[#8774e1]">You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
