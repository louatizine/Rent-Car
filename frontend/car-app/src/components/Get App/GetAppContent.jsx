import React from "react";
import image from "../Get App/GetAppImg.png";
import AppleImage from "../Get App/Apple Image.jpg"
import AndroidImage from "../Get App/Android Image.jpg"


function GetAppContent() {
  return (
    <>
      <div className="get-app-content-container w-[65rem] h-full my-20 m-auto max-lg:w-[50rem] max-md:w-[40rem] max-[640px]:w-[30rem] max-[500px]:w-[20rem]">
        <div className="flex  justify-center items-center max-md:flex-col max-md:gap-10">
          <div className="left-content w-[25rem] max-lg:w-[20rem] max-md:w-[10rem]">
            <img src={image} alt="" />
          </div>
          <div className="right-content text-black w-[35rem] max-lg:w-[25rem] max-md:w-[35rem] max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center max-[640px]:w-[30rem] max-[500px]:w-[20rem]">
            <p className="text-xl uppercase font-normal tracking-wider max-[500px]:text-sm">Car Rentals Made Simple.</p>
            <h1 className="text-4xl font-semibold max-[500px]:text-2xl">DOWNLOAD OUR APP</h1>
            <p className="mt-10 font-light tracking-wider max-[500px]:text-sm">Explore freedom on wheels with our hassle-free car rentals. From compact to spacious, find the perfect ride for your journey. Start driving towards your next adventure today</p>

            <div className="buttons flex items-center gap-4 mt-10 max-[500px]:flex-col">
              <img src={AppleImage} className="w-44 cursor-pointer" alt="" />
              <img src={AndroidImage} className="w-44 cursor-pointer" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetAppContent;
