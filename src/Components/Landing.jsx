import React from 'react'

const Landing = () => {
  return (
    <div className='flex w-full items-center justify-center min-h-screen bg-[#98CABD]'>
      <div className='w-1/3 lg:block hidden'>
      <img src="Lpage.png" alt="logo" className='w-[90%] h-auto' />
      </div>
      <div className='flex flex-col items-center justify-center gap-8 lg:w-1/2 w-full px-6 py-4'>
        <p className='text-gray-800 text-7xl font-bold'>SayIt</p>
        <p className='text-2xl italic'>Where Apparel Meets Opinions</p>
        <p className='text-white text-lg text-center font-bold'>Welcome to SayIt, where apparel meets opinions! SayIt is your ultimate destination for exploring and comparing clothing products from various brands. We understand that choosing the perfect outfit involves more than just style; it's about expressing yourself and making informed decisions. With SayIt, you can browse a diverse collection of clothing items, read user reviews, and easily compare products from different brands. Elevate your shopping experience by embracing the power of community insights. Discover, express, and make informed fashion choices at SayIt!</p>

        <button
        onClick={() => (window.location.href = '/signup')}
         className='bg-[#F84C60] text-black font-semibold p-3 lg:w-[30%] w-1/2 rounded-full hover:bg-red-800 hover:text-white'>Get Started ↪ </button>
        
      </div>
      
    </div>
  )
}

export default Landing
