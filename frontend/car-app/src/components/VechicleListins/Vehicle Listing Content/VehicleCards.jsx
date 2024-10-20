import React from "react";
import data from "../../../Data/RentalFleets.js";

import { FaAngleDoubleRight } from "react-icons/fa";


function VehicleCards() {
  return (
    <>
      <div className="vehicle-card-container mt-20 w-[45rem] min-h-[100vh] overflow-hidden bg-white flex flex-col gap-10 max-lg:w-[50rem] max-[570px]:w-[25rem] max-[500px]:w-[20rem]">
        {data.map((car, index) => (
          <div key={index} className="card-container h-48 flex max-lg:h-80 bg-re-500 justify-center max-md:flex-col max-md:h-auto shadow-xl bg-white " >
            <div className="card-left w-[15rem] h-full max-lg:h-auto max-lg:w-[35rem] max-[500px]:w-[20rem]">
              <img className="w-[100%] h-[100%] object-cover" src={car.carImage} alt="" />
            </div>
            <div className="card-right w-[30rem] h-full pl-8 pt-2 flex flex-col justify-center items-start ">
              <h1 className="text-base font-medium uppercase max-md:font-semibold max-md:text-xl">{car.carTitle}</h1>

              <div className="car-dets flex justify-center items-center gap-4 mt-6 max-lg:flex-col max-lg:items-start max-lg:gap-0 max-md:flex-row max-md:gap-10 max-[500px]:gap-2">
                <div className="left-dets">
                  <p className="font-semibold text-sm mt-2">
                    Year: <span className="font-light">{car.carYear}</span>
                  </p>
                  <p className="font-semibold text-sm mt-2">
                    Fuel: <span className="font-light">{car.Fuel}</span>
                  </p>
                  <p className="font-semibold text-sm mt-2">
                    Horsepower: <span className="font-light">200 hp</span>
                  </p>
                  <p className="font-semibold text-sm mt-2">
                    Condition: <span className="font-light">Driver</span>
                  </p>
                </div>

                <div className="center-dets">
                  <p className="font-semibold text-sm mt-2">
                    Mileage: <span className="font-light">{car.carKm}</span>
                  </p>

                  <p className="font-semibold text-sm mt-2">
                    Engine: <span className="font-light">1900 cm3</span>
                  </p>

                  <p className="font-semibold text-sm mt-2">
                    Drive: <span className="font-light">4x4</span>
                  </p>

                  <p className="font-semibold text-sm mt-2">
                    Stock Status: <span className="font-light">In Stock</span>
                  </p>
                </div>

                <div className="right-dets flex flex-col justify-center items-start max-lg:hidden max-md:flex max-[570px]:hidden">
                  <p className="text-sm">Price:</p>
                  <p className="text-base font-semibold text-[#E50914]">{car.pricePerDay} <span className="text-sm font-light text-black"> / per day</span></p>

                  <p className="flex justify-center items-center gap-2 text-sm text-[#E50914] font-bold cursor-pointer hover:underline transition-all duration-150 ease-linear">READ MORE  <FaAngleDoubleRight className="w-3 h-3"/></p>
                </div>

              
              </div>

            </div>
              <div className="right-dets hidden flex-col justify-center w-[20rem] items-start max-lg:flex bg-re-500 max-md:hidden">
                  <p className="text-sm">Price:</p>
                  <p className="text-xl font-semibold text-[#E50914]">{car.pricePerDay} <span className="text-sm font-light text-black"> / per day</span></p>

                  <p className="flex justify-center items-center gap-2 text-sm text-[#E50914] font-bold cursor-pointer hover:underline transition-all duration-150 ease-linear">READ MORE  <FaAngleDoubleRight className="w-3 h-3"/></p>
                </div>

                <div className="right-dets hidden flex-col justify-center w-[25rem] items-start max-[570px]:flex max-[500px]:w-[20rem]">
                 <div className="flex justify-center items-center gap-4 my-2 ml-8">
                 <p className="text-sm">Price: </p>
                  <p className="text-xl font-semibold text-[#E50914]">{car.pricePerDay} <span className="text-sm font-light text-black"> / per day</span></p>
                 </div>

                  <p className="flex justify-center items-center gap-2 w-full h-10  text-sm text-white bg-[#DC2D13] text-center font-bold cursor-pointer hover:underline transition-all duration-150 ease-linear">READ MORE  <FaAngleDoubleRight className="w-3 h-3"/></p>
                </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default VehicleCards;
