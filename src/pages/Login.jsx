import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = React.useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div>
      <div className="bg-[#181818] h-screen flex items-center justify-center">
        <div className="bg-[#212121] py-5 px-24 rounded-xl flex flex-col gap-3 items-center">
          <span className="font-bold text-2xl text-[#8774e1]">
            Telegram copy
          </span>
          <span className="text-sm">Login</span>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            <button className="p-3 rounded-xl bg-[#8774e1] hover:opacity-90 transition-opacity">
              Sign up
            </button>
            {err && <span>Something went wrong</span>}
          </form>
          <p className="text-[#8774e1]">
            You don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
