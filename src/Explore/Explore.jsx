import React from "react";

const Explore = () => {
  return (
    <div className="flex flex-col items-center justify-centr w-full min-h-screen bg-[#010314] py-4">
        <p className="font-bold text-4xl text-[#8e64ff] mt-10" >Explore Clothes</p>
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
