import React from "react";

const Review = () => {
  const clothingReviews = [
    {
      id: 1,
      user: "Ali",
      review: "This shirt is amazing! Great quality.",
    },
    {
      id: 2,
      user: "Hassan",
      review: "Perfect fit and comfortable to wear.",
    },
    {
      id: 3,
      user: "Zaid",
      review: "Excellent service and fast delivery.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-[#98CABD] gap-2 ">
        <h1 className="text-4xl font-semibold mb-6 text-center">Reviews</h1>
        <ul className="grid gap-6 w-[80%]">
          {clothingReviews.map((review) => (
            <li key={review.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">{review.user}</h3>
              <p className="text-gray-700">{review.review}</p>
            </li>
          ))}
        </ul>
      </div>
    
  );
};

export default Review;
