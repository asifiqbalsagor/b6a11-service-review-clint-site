import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://919345.smushcdn.com/2290346/wp-content/uploads/2022/02/52BBA7A4-87DA-4804-B741-1B8076487A20-scaled.jpeg?lossy=1&strip=1&webp=1"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <h1 className="text-5xl">Welcome My The Cooker life Website.</h1>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg my-6">
            Here is my home made Best Weight Loss Eating Patterns for Men, Special Coffee, Chicken Fry,Vegetable Egg Ludus , Briyani etc.
            I provide homemade food service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
