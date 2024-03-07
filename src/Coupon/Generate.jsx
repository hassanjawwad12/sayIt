import React, { useState } from "react";
import Reveal from "./Reveal";

const Generate = () => {
  const [coupon, setCoupon] = useState("");

  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);

  const generateCoupon = () => {
    const randomCoupon = Math.random().toString(36).substr(2, 18).toUpperCase();
    setCoupon(randomCoupon);
    setToggle(true);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full min-h-screen bg-[#98CABD]">
      <div className="flex flex-col items-center justify-center bg-gray-200 rounded-md h-72">
      <img src="tshirt.png" className="w-80 " />

      </div>
      {show ? (
        <>
          {toggle ? (
            <Reveal coupon={coupon} />
          ) : (
            <button
              className="bg-[#E97451] text-black rounded-full p-4 hover:bg-blue-800 hover:text-white hover:font-bold"
              onClick={generateCoupon}
            >
              Get Discount Coupon
            </button>
          )}
        </>
      ) : (
        <>
          <p
            onClick={() => setShow(true)}
            className="text-center text-2xl mt-4 cursor-pointer underline"
          >
            I want to buy this product 😻{" "}
          </p>
        </>
      )}
    </div>
  );
};

export default Generate;
