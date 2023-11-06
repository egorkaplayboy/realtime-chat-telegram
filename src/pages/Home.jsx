import React from 'react'
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
const Home = () => {
  return (
    <div className="bg-[#181818] h-screen flex items-center justify-center">
      <div className="bg-[#212121] rounded-xl w-[65%] h-[80%] flex">
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default Home