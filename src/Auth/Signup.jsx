import React from "react";
import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className='flex w-full items-center justify-center min-h-screen bg-[#F5F5DC]'>
      <div className='w-[40%] lg:block hidden'>
      <img src="hanger.png" alt="logo" className='w-[90%] h-auto' />
      </div>
      <div className='flex flex-col items-center justify-center gap-8 lg:w-1/2 w-full px-6 py-4'>
    

      <div className="bg-[#98CABD] flex flex-col items-center justify-center w-full gap-4 rounded-lg text-black bg-opacity-80 p-4">
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
    </div>
    
  );
};

export default Signup;
