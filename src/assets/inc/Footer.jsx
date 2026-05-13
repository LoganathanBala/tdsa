import React from "react";

function Footer() {
  return (
    <>
      <div className="relative flex justify-center gap-6 bg-blue-900 py-10 px-2 flex-col items-start xl:pl-44 lg:pl-20 md:px-5 sm:pl-0 sm:flex-row sm:gap-0">
        <div className="px-4 flex flex-col sm:w-1/3">
            <div className="text-xl font-bold text-white pb-2 sm:text-lg">
                Get in touch
            </div>
            <div className="flex items-start gap-1 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <p>Address, dsbcldksjncbkjdsbcknds;n
                     dcndlksnc;lkdn ;clknd;lknc dnc;ln.
                </p>
            </div>
        </div>
        <div className="footer-menu w-full flex flex-col px-4 sm:w-1/3">
            <h3 className="text-xl font-bold text-white pb-2 sm:text-lg">Links</h3>
            <ul className="list-none grid grid-cols-2 gap-2 sm:gap-1">
                <li className=""><a href="#" className="relative inline-block text-lg text-white sm:">Home</a></li>
                <li className=""><a href="#" className="relative inline-block text-lg text-white sm:">About Us</a></li>
                <li className=""><a href="#" className="relative inline-block text-lg text-white sm:">Board of Members</a></li>
                <li className=""><a href="#" className="relative inline-block text-lg text-white sm:">Members</a></li>
                <li className=""><a href="#" className="relative inline-block text-lg text-white sm:">Press</a></li>
                <li className=""><a href="#" className="relative inline-block text-lg text-white sm:">Media</a></li>
                <li className=""><a href="#" className="relative inline-block text-lg text-white sm:">Join Us</a></li>
                <li className=""><a href="#" className="relative inline-block text-lg text-white sm:">Contact Us</a></li>
            </ul>
        </div>
        <div className="w-full px-4 sm:px-0 sm:w-1/3">
             <h3 className="pb-2 text-xl font-bold text-white sm:text-lg">Affiliated</h3>
             <p className="text-md font-medium text-white">Indian Silambam Fedration</p>
             <p className="text-md font-medium text-white">Tamilnadu Silambam Association</p>             
        </div>
      </div>
      <div className="flex justify-between bg-black flex-col items-center gap-2 py-4 lg:px-60 md:px-10 sm:flex-row">
          <div className="text-md font-semibold text-white">
            Copyright &#169; 2025 TDSA.
          </div> 
          <div className="flex flex-row gap-4">
            <a href="#" className="text-md font-semibold text-white hover:underline">Terms & Conditions</a>
            <a href="#" className="text-md font-semibold text-white hover:underline">Privacy Policy</a>
          </div>
      </div>
    </>
  );
}

export default Footer;