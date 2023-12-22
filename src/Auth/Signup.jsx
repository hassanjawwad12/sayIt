import React from "react";
import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="bg-gray-800 flex flex-col items-center justify-center min-h-screen w-full background-image">
      <div className="bg-[#98CABD] flex flex-col items-center justify-center lg:w-2/5 w-11/12 gap-4 rounded-lg text-black bg-opacity-80 p-4">
      <p className='text-center font-bold text-3xl italic mt-4'>SayIt</p>
        <p className='text-xl italic'>Where Apparel Meets Opinions</p>

        <p className='text-black text-lg font-semibold'>Username</p>
        <input
          className='p-2 rounded-lg w-[80%] bg-transparent text-white font-semibold border border-gray-600 focus:outline-none focus:bg-transparent'
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p className='text-black text-lg font-semibold'>Email</p>
        <input
          className='p-2 rounded-lg w-[80%] bg-transparent text-white font-semibold border border-gray-600 focus:outline-none focus:bg-transparent'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
          
            <p className='text-black text-lg font-semibold'>Password</p>  
          <input
            className='p-2 rounded-lg w-[80%] bg-transparent text-white font-semibold border border-gray-600 focus:outline-none focus:bg-transparent'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className='text-black text-lg font-semibold'>Confirm Password</p>
          <input
            className='p-2 rounded-lg w-[80%] bg-transparent text-white font-semibold border border-gray-600 focus:outline-none focus:bg-transparent'
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}  
          />
           <button className='bg-[#F84C60] text-black font-semibold p-2 md:w-[30%] w-[50%] rounded-full hover:bg-red-800 hover:text-white'>Create Account</button>
          <p>Or</p>
          <p>Already have an account💨  </p>
          <button
          onClick={() => (window.location.href = '/login')}
           className='bg-[#F84C60] text-black font-semibold p-2 md:w-[30%] w-[50%] rounded-full hover:bg-red-800 hover:text-white mb-2'>Login</button>


      </div>
    </div>
  );
};

export default Signup;
