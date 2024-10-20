import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from "../../Data/Data.js";

function Hamburger( {isHamburgerVisible, setisHamburgerVisible} ) {
  return (
    <>
      <div className={`hamburger-container  w-[60%] h-screen hidden max-lg:block overflow-hidden bg-[#2d2d2d] absolute left-0 top-0 p-16 pr-0 max-[440px]:p-5 transition-all duration-150 ease-in-out z-50 translate-x-[-100%] ${isHamburgerVisible ? " translate-x-[0]" : " translate-x-[-100%] max-lg:block"}`}>
        
      <div className="profile  justify-center items-center hidden gap-2  max-[440px]:flex max-[440px]:justify-start max-[440px]:items-center max-[440px]:ml-[-10px] ">
            
              <i className="ri-user-line bg-white text-black p-3 text-2xl rounded-full hover:bg-[#DC2D13] hover:text-white transition-all duration-150 ease-in-out"></i>
            

            <div className="profile-dets ">
              <p className="text-white font-bold">
                HI, USER
              </p>
              <Link>
                <div className="log-in font-bold text-white text-xs flex gap-1 hover:text-[#DC2D13] transition-all duration-150 ease-in-out">
                  <i className="ri-login-box-line"></i>
                  <p className="">LOG IN</p>
                </div>
              </Link>
            </div>
          </div>
        
        <ul className='max-[440px]:mt-10'>
          {NavLinks.map((links) => (
            <Link className='' to={links.link} key={links.id}>
              <li className='hover:text-[#DC2D13] transition-all duration-150 ease-in-out text-white mb-8 font-bold'>{links.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Hamburger;
