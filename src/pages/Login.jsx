import React from "react";

const Login = () => {
  return (
    <div>
      <div className="bg-[#181818] h-screen flex items-center justify-center">
        <div className="bg-[#212121] py-5 px-24 rounded-xl flex flex-col gap-3 items-center">
          <span className="font-bold text-2xl text-[#8774e1]">
            Telegram copy
          </span>
          <span className="text-sm">Login</span>
          <form className="flex flex-col gap-4">
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
          </form>
          <p className="text-[#8774e1]">You don't have an account? Register</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
