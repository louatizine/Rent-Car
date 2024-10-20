import React from "react";
import SortingMenu from "./SortingMenu";
import VehicleCards from "./VehicleCards";
import VehicleListingSidebar from "./VehicleListingSidebar";

function VechicleContent() {
  return (
    <>
      <div className="vehicle-content-container bg-[#F5F5F5] w-full min-h-screen overflow-hidden mb-20 ">
        <div className="content-container w-[65rem] m-auto h-full bg-yelow-400 flex justify-between items-start max-lg:w-[50rem] max-md:w-[35rem] max-[570px]:w-[25rem] max-[500px]:w-[20rem] max-lg:flex-col">
          <div className="left-container">
            <div className=" flex justify-start items-center px-10 mt-10 w-[45rem] bg-[#FAFAFA] shadow-xl">
              <SortingMenu />
            </div>

            <VehicleCards />
          </div>

          <div className="right-container min-h-[100vh] w-[20rem] flex justify-end items-center mt-20 sticky top-0 overflow-hidden max-lg:w-[50rem] max-lg:mt-0 max-md:w-[35rem] max-[570px]:w-[25rem] max-[500px]:w-[20rem]">
            <VehicleListingSidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default VechicleContent;
