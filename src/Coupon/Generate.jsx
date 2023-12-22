import React, { useState } from 'react';

const Generate = () => {
  const [coupon, setCoupon] = useState('');

  const generateCoupon = () => {
    const randomCoupon = Math.random().toString(36).substr(2, 8).toUpperCase();
    setCoupon(randomCoupon);
  };

  return (
    <div>
      <h2>Random Coupon Number Generator</h2>
      <button onClick={generateCoupon}>Generate Coupon</button>
      {coupon && <p>Your Coupon: {coupon}</p>}
    </div>
  );
};

export default Generate;
