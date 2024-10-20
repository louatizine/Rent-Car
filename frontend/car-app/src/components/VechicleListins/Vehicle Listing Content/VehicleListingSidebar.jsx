import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function VehicleListingSidebar() {
  const [pickupDate, setPickupDate] = useState(null);
  const [dropoffDate, setDropoffDate] = useState(null);
  const [sliderValue, setsliderValue] = useState(50);

  const handleValueChange = (event) => {
    const value = parseInt(event.target.value * 100 );
    setsliderValue(value);
  };

  return (
    <>
      <div className="sidebar-container w-[18rem]  bg-white p-10 shadow-2xl min-h-[100vh] sticky top-0 max-lg:w-[50rem] max-md:w-[35rem] max-[570px]:w-[25rem] max-[500px]:w-[20rem]">
        <div className="booking-time mt-10">
          <h1 className="font-medium">BOOKING TIME</h1>
          <DatePicker
            className="w-52 h-10 px-4 max-lg:w-[70%] max-md:w-[100%] mt-6 "
            placeholderText="Pick-up date"
            selected={pickupDate}
            onChange={(date) => setPickupDate(date)}
            dateFormat={"dd/MM/yyyy"}
            minDate={new Date()}
            showMonthDropdown
            showYearDropdown
            popperPlacement="bottom"
          />

          <DatePicker
            className="w-52 h-10 px-4 max-lg:w-[70%] max-md:w-[100%] mt-6"
            placeholderText="Drop-off date"
            selected={dropoffDate}
            onChange={(date) => setDropoffDate(date)}
            dateFormat={"dd/MM/yyyy"}
            minDate={new Date()}
            showMonthDropdown
            showYearDropdown
            popperPlacement="bottom"
          />
        </div>

        <div className="price-range mt-20 ">
          <h1 className="font-medium">PRICE RANGE </h1>
          <input
            type="range"
            name=""
            id=""
            className="w-52  mt-6 "
            onChange={handleValueChange}
          />
          <p className="text-gray-300 text-base my-4 w-24 flex justify-center items-center h-8 bg-[#DC2D13] ml-12 font-bold">
            {sliderValue}
          </p>
        </div>

        <div className="vehicle-body-type ">
          <p className="font-medium uppercase mt-20 mb-8"> Vehicle Body Type</p>
          <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-4 max-[570px]:grid-cols-2">
            <button className=" w-24 uppercase text-xs font-medium h-8 bg-[#555555] text-white hover:bg-[#DC2D13]">
              Suv
            </button>
            <button className=" w-24 uppercase text-xs font-medium h-8 bg-[#555555] text-white hover:bg-[#DC2D13]">
              Sedan
            </button>
            <button className=" w-24 uppercase text-xs font-medium h-8 bg-[#555555] text-white hover:bg-[#DC2D13]">
              Hatchback
            </button>
            <button className=" w-24 uppercase text-xs font-medium h-8 bg-[#555555] text-white hover:bg-[#DC2D13]">
              Muv
            </button>
          </div>
        </div>

        <div className="reset-filter flex justify-start ml-10 items-center mt-20 mb-10 ">
          <button className="text-white px-6 py-2 mb-7 bg-[#DC2D13] text-sm relative font-bold hover:bg-[#FFA500] transition-all duration-150 ease-in-out  ">
            RESET FILTER
          </button>
        </div>
      </div>
    </>
  );
}

export default VehicleListingSidebar;
