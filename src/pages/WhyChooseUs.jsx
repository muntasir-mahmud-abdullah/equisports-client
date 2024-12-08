import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Us?</h2>
        <div className="w-24 mx-auto h-1 bg-primary mb-4 rounded-full"></div>
        <p className="text-lg text-gray-600">
          The best equipment for your sporting needs
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Benefit 1 */}
        <div className="card bg-base-100 shadow-lg rounded-lg p-6">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7l9 9 9-9"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center mb-2">
            Quality Assurance
          </h3>
          <p className="text-center text-gray-600">
            We provide only the highest quality equipment that ensures
            performance and durability.
          </p>
        </div>

        {/* Benefit 2 */}
        <div className="card bg-base-100 shadow-lg rounded-lg p-6">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7l9 9 9-9"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center mb-2">
            Fast Shipping
          </h3>
          <p className="text-center text-gray-600">
            Get your equipment delivered quickly with our fast and reliable
            shipping options.
          </p>
        </div>

        {/* Benefit 3 */}
        <div className="card bg-base-100 shadow-lg rounded-lg p-6">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7l9 9 9-9"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center mb-2">
            Excellent Customer Support
          </h3>
          <p className="text-center text-gray-600">
            Our customer support is here to help you with any questions or
            issues, ensuring a smooth shopping experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
