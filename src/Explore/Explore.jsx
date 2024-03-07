import React from "react";

const Explore = () => {
  return (
    <div className="flex flex-col items-center justify-centr w-full min-h-screen bg-[#010314] py-4">
      <p className="font-bold text-4xl text-[#8e64ff] mt-10">Explore Clothes</p>

      <form className="w-1/3 mx-auto mt-10">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm  border  rounded-lg   bg-gray-700  placeholder-gray-400 text-white "
            placeholder="shirt type"
            required
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-purple-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 "
          >
            Search
          </button>
        </div>
      </form>

      <div className="flex flex-row w-[100%] space-x-8 items-center justify-center px-6 gap-8 mt-10">
        <div className=" flex flex-col p-2 items-center justify-center rounded-lg shadow bg-gray-800 w-2/6 h-88 ">
          <img src="tshirt.png" className="w-[90%]" />
          <p className="font-bold text-2xl text-[#8e64ff] mb-10">White Shirt</p>
        </div>
        <div className=" flex flex-col p-2 items-center justify-center rounded-lg shadow bg-gray-800 w-2/6 h-88 ">
          <img src="tshirt.png" className="w-[90%]" />
          <p className="font-bold text-2xl text-[#8e64ff] mb-10">White Shirt</p>
        </div>
      </div>
      <div className="mt-8 flex flex-col p-2 items-center justify-center rounded-lg shadow bg-gray-800 w-2/6 h-88 ">
        <img src="tshirt.png" className="w-[90%]" />
        <p className="font-bold text-2xl text-[#8e64ff] mb-10">White Shirt</p>
      </div>
    </div>
  );
};

export default Explore;
