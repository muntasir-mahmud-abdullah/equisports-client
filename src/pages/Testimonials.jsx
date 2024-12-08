import React from "react";

const Testimonials = () => {
  return (
    <div className="container mx-auto p-4 my-8 bg-gray-100 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8">
        Customer Testimonials
      </h2>
      <div className="space-y-8">
        <div className="testimonial-card p-6 bg-white shadow-lg rounded-lg">
          <p className="text-lg italic">
            "Great quality products! I loved the soccer ball, perfect for all
            terrains."
          </p>
          <div className="mt-4 flex items-center">
            <img
              src="https://via.placeholder.com/40"
              alt="Customer 1"
              className="rounded-full w-12 h-12 mr-4"
            />
            <div>
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-500">Verified Buyer</p>
            </div>
          </div>
        </div>
        <div className="testimonial-card p-6 bg-white shadow-lg rounded-lg">
          <p className="text-lg italic">
            "The tennis racket is so lightweight and durable. Highly recommend!"
          </p>
          <div className="mt-4 flex items-center">
            <img
              src="https://via.placeholder.com/40"
              alt="Customer 2"
              className="rounded-full w-12 h-12 mr-4"
            />
            <div>
              <p className="font-semibold">Jane Smith</p>
              <p className="text-sm text-gray-500">Verified Buyer</p>
            </div>
          </div>
        </div>
        {/* Add more testimonials as needed */}
      </div>
    </div>
  );
};

export default Testimonials;
