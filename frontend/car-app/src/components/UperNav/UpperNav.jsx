import React from 'react';

function UpperNav({ paginationLeft }) {
  console.log('paginationLeft:', paginationLeft);
  return (
    <div>
      <div className="upper-nav-container w-9/12 absolute top-0 left-[10%] h-12 m-auto flex justify-between items-center px-10 max-lg:px-2 max-sm:justify-center ">
        <div className="left-upper-nav text-white gap-4 flex justify-center items-center h-12 text-xs max-[430px]:flex-col max-[430px]:gap-1">
          <div className="phone flex gap-4"><i className="ri-phone-line"></i><p> +91 65432 10987</p></div>
         <div className="mail flex gap-4"> <i className="ri-mail-open-line"></i> <p>autozonerental.gmail.com</p></div>
        </div>
        <div className="right-upper-nav text-white gap-4 flex justify-center items-center h-12 text-sm max-sm:hidden">
          <i className="ri-facebook-line hover:text-[#DC2D13] transition-all duration-150 ease-in-out cursor-pointer"></i>
          <i className="ri-twitter-line hover:text-[#DC2D13] transition-all duration-150 ease-in-out cursor-pointer"></i>
          <i className="ri-pinterest-line hover:text-[#DC2D13] transition-all duration-150 ease-in-out cursor-pointer"></i>
          <i className="ri-youtube-line hover:text-[#DC2D13] transition-all duration-150 ease-in-out cursor-pointer"></i>
          <i className="ri-instagram-line hover:text-[#DC2D13] transition-all duration-150 ease-in-out cursor-pointer"></i>
        </div>
      </div>
      {/* <div className={`pagination w-10 h-1 bg-[#DC2D13] z-50 absolute ${paginationLeft}`}></div> */}

      <hr className='w-9/12 m-auto relative' />
    </div>
  );
}

export default UpperNav;
