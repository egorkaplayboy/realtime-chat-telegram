import React from "react";

const Search = () => {
  return (
    <div >
      <div class="p-3 relative">
        <input
          type="text"
          placeholder="Search"
          class="w-full bg-[#181818] rounded-full py-2 pl-10 pr-3 focus:outline-[#8774e1] outline-none"
        />
        <div class="absolute inset-y-0 left-2 pl-3 flex items-center">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
              stroke="#707070"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="p-3 flex items-center gap-3 cursor-pointer hover:bg-[#313131] rounded-xl m-2">
        <img
          className="w-14 h-14 rounded-full object-cover"
          src="https://static.tildacdn.com/tild6161-3461-4630-b363-366630623461/photo.jpg"
          alt=""
        />
        <div>
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
