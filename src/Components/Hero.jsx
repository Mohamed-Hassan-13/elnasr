import React from "react";

const Hero = () => {
  return (
    <div className="h-screen relative flex justify-center items-center bg-[url('/assets/loader.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-[#b554073d]"></div>
      <div className=" z-10 text-white p-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold">
          <span className="text-[#F26B00]">النصر </span>
          للمقاولات والمعدات الثقيله
        </h1>
        <p className="mt-3 text-3xl md:text-5xl ">
          تأجير معددات قويه وامنه وعاليه الجوده
        </p>
      </div>
    </div>
  );
};

export default Hero;
