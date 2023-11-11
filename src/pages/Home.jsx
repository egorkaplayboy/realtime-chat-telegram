import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <div className="bg-[#181818] h-screen flex items-center justify-center">
      <div className="bg-[#212121] h-full rounded-xl w-full lg:w-[90%] xl:w-[1280px] lg:h-[90%] xl:h-4/5 flex">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
