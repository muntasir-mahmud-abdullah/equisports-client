import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://via.placeholder.com/1200x400?text=Premium+Sports+Gear"
          className="w-full"
          alt="Premium Sports Gear"
        />
        <div className="absolute flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-white">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Premium Sports Gear</h2>
            <p className="mt-4 text-lg">
              Get the best sports equipment to elevate your game.
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://via.placeholder.com/1200x400?text=Custom+Team+Apparel"
          className="w-full"
          alt="Custom Team Apparel"
        />
        <div className="absolute flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-white">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Custom Team Apparel</h2>
            <p className="mt-4 text-lg">
              Design custom kits to represent your team in style.
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://via.placeholder.com/1200x400?text=Fitness+Accessories"
          className="w-full"
          alt="Fitness Accessories"
        />
        <div className="absolute flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-white">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Fitness Accessories</h2>
            <p className="mt-4 text-lg">
              Explore a wide range of accessories to enhance your workouts.
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
