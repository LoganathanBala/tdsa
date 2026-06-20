import tdsaLogo from "../images/tdsa-logo.png";
import CurrentDateTime from "./Date";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [issubOpen, setIsSubOpen] = useState(false);
  const [isMediaOpen, setIsMediaOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const subMenu = () => {
    setIsSubOpen(!issubOpen);
  };

  const subMediaMenu = () => {
    setIsMediaOpen(!isMediaOpen);
  };

  return (
    <>
      <header className="block">
        <div className="fixed bg-white w-full top-0 mt-0 mb-0 shadow-2xl z-50 ">
          {/* Desktop version header */}
          <div className="flex-row justify-between gap-2 hidden md:flex">
            <div className="logo flex items-center justify-center w-[15%]">
              <a href="/">
                <img className="w-26" src={tdsaLogo} alt="TDSA Logo" />
              </a>
            </div>
            <div className="flex flex-col ml-auto mr-auto lg:w-[70%] md:w-full">
              <div className="flex bg-blue-900 justify-between items-center py-4 px-8 w-auto">
                <div className="icon flex gap-1 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  <a href="#" className="hover:underline hover:transition-all text-white">
                    tdsa@gmail.com
                  </a>
                </div>
                <div className="flex gap-2 flex-row">
                  <a href="#" className="hover:underline text-white">
                    {" "}
                    Facebook
                  </a>
                  <a href="#" className="hover:underline text-white">
                    {" "}
                    Insta
                  </a>
                  <a href="#" className="hover:underline text-white">
                    {" "}
                    Youtube
                  </a>
                </div>
              </div>
              <div className="main-menu flex items-center">
                <ul className="list-none flex w-full flex-wrap p-0 m-0 items-center">
                  <li className="relative flex grow-1 justify-center hover:bg-blue-900 hover:text-white p-2 py-4 cursor-pointer transition border-l-1 border-r-1 border-gray-200 hover:transition-all hover:border-l-[1px] hover:border-t-white hover:border-blue-900">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? "active-link bg-blue-900 text-white text-md font-bold"
                          : "text-md font-bold text-blue-900"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="relative flex grow-1 justify-center hover:bg-blue-900 hover:text-white p-2 py-4 cursor-pointer transition border-r-1 border-gray-300 hover:transition-all">
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive
                          ? "active-link bg-blue-900 text-white text-md font-bold"
                          : "text-md font-bold text-blue-900"
                      }
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li className="menu relative flex grow-1 justify-center hover:bg-blue-900 hover:text-white p-2 py-4 cursor-pointer transition border-r-1 border-gray-300 hover:transition-all">
                    <a className="text-md font-bold text-blue-900">
                      Members
                      <ul className="sub-menu hidden absolute z-10 bg-white flex-col top-14 w-full left-0 boreder-2 border-gray-400">
                        <li className="text-blue-900 hover:bg-blue-500 hover:text-white p-2 py-4 cursor-pointer transition hover:transition-all">
                          <Link to="/board" className="text-md text-blue-900">
                            Board of Members
                          </Link>
                        </li>
                        <li className="hover:bg-blue-500 hover:text-white p-2 py-4 cursor-pointer transition hover:transition-all">
                          <Link to="/members" className="text-md text-blue-900">
                            Members
                          </Link>
                        </li>
                      </ul>
                    </a>
                  </li>
                  <li className="menu relative flex grow-1 justify-center hover:bg-blue-900 hover:text-white p-2 py-4 cursor-pointer transition border-r-1 border-gray-300 hover:transition-all">
                    <a className="text-md font-bold text-blue-900">
                      Media
                      <ul className="sub-menu hidden absolute z-10 bg-white flex-col top-14 w-full left-0 boreder-2 border-gray-400">
                        <li className="text-blue-900 hover:bg-blue-500 hover:text-white p-2 py-4 cursor-pointer transition hover:transition-all">
                          <Link to="/press" className="text-md text-blue-900">
                            Press
                          </Link>
                        </li>
                        <li className="hover:bg-blue-500 hover:text-white p-2 py-4 cursor-pointer transition hover:transition-all">
                          <Link to="/gallery" className="text-md text-blue-900">
                            Gallery
                          </Link>
                        </li>
                      </ul>
                    </a>
                  </li>
                  <li className="relative flex grow-1 justify-center cursor-pointer transition border-r-1 border-gray-300 hover:transition-all">
                    <NavLink
                      to="/results"
                      className={({ isActive }) =>
                        isActive
                          ? "active-link bg-blue-900 text-white text-md font-bold px-2 py-4"
                          : "flex grow-1 justify-center text-md font-bold text-blue-900 px-2 py-4 hover:bg-blue-900 hover:text-white"
                      }
                    >
                      Results
                    </NavLink>
                  </li>
                 <li className="relative flex grow-1 justify-center cursor-pointer transition border-r-1 border-gray-300 hover:transition-all">
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        isActive
                          ? "active-link bg-blue-900 text-white text-md font-bold px-2 py-4"
                          : "flex grow-1 justify-center text-md font-bold text-blue-900 px-2 py-4 hover:bg-blue-900 hover:text-white"
                      }
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="items-center justify-center w-[15%] flex-col gap-2 my-1 lg:flex md:hidden">
              {/* <button className="bg-blue-950 text-sm font-bold text-white rounded-sm px-8 py-3 cursor-pointer transition hover:bg-blue-900 hover:text-white hover:transition-all">
              Join Us
            </button> */}
              <div class="wrapper pb-2">
                <a class="cta" href="#">
                  <span>Join Us</span>
                  <span>
                    <svg
                      width="40px"
                      height="23px"
                      viewBox="0 0 66 43"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        id="arrow"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <path
                          class="one"
                          d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          class="two"
                          d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          class="three"
                          d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                          fill="#FFFFFF"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </a>
              </div>
              <div className="worksans text-sm font-medium text-sky-800">
                <CurrentDateTime />
              </div>
            </div>
          </div>
          {/* mobile version header */}
          <div className="flex flex-row items-center justify-between p-2 px-3 relative md:hidden">
            <div className="logo">
              <a href="/">
                <img className="w-20" src={tdsaLogo} alt="TDSA Logo" />
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <div className="social-icons flex gap-2 flex-row">
                <a href="#" className="text-blue-900">
                  {" "}
                  Facebook
                </a>
                <a href="#" className="text-blue-900">
                  {" "}
                  Insta
                </a>
                <a href="#" className="text-blue-900">
                  {" "}
                  Youtube
                </a>
              </div>
              <div className="mobile-menu flex flex-col">
                <button
                  type="button"
                  onClick={toggleMenu}
                  class="relative inline-flex items-center justify-center rounded-md p-1 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
                >
                  {isOpen ? (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                      className="size-6"
                    >
                      <path
                        d="M6 18L18 6M6 6l12 12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                      className="size-6"
                    >
                      <path
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
                <ul
                  className={
                    isOpen
                      ? "show-menu list-none absolute top-24 left-0 bg-white w-full transition-all shadow-gray-950"
                      : "hide-menu hidden"
                  }
                >
                  <li className="p-2 pb-1 text-blue-900 hover:bg-blue-900 hover:text-white">
                    <Link href="/" className="text-md font-medium uppercase">
                      Home
                    </Link>
                  </li>
                  <li className="p-2 pb-1">
                    <Link
                      to="/about"
                      className="text-blue-900 text-md font-medium uppercase"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="p-2 pb-1">
                    <Link
                      to="/members"
                      className="text-blue-900 text-md font-medium uppercase"
                      onClick={subMenu}
                    >
                      Members {issubOpen ? "Downarrow" : "upArrow"}{" "}
                    </Link>
                    <ul className={issubOpen ? "show-menu" : "hidden"}>
                      <li className="p-2 pb-1">
                        <Link
                          to="/board"
                          className="text-blue-900 text-md font-medium uppercase"
                        >
                          Board of Members
                        </Link>
                      </li>
                      <li className="p-2 pb-1">
                        <Link
                          to="/members"
                          className="text-blue-900 text-md font-medium uppercase"
                        >
                          Members
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="p-2 pb-1">
                    <Link
                      href="#"
                      className="text-blue-900 text-md font-medium uppercase"
                      onClick={subMediaMenu}
                    >
                      Media {isMediaOpen ? "Downarrow" : "upArrow"}
                      <ul className={isMediaOpen ? "show-menu" : "hidden"}>
                        <li className="p-2 pb-1">
                          <Link
                            to="/press"
                            className="text-blue-900 text-md font-medium uppercase"
                          >
                            Press
                          </Link>
                        </li>
                        <li className="p-2 pb-1">
                          <Link
                           to="/gallery"
                            className="text-blue-900 text-md font-medium uppercase"
                          >
                            Gallery
                          </Link>
                        </li>
                      </ul>
                    </Link>
                  </li>
                  <li className="p-2 pb-1">
                    <Link
                      to="/result"
                      className="text-blue-900 text-md font-medium uppercase"
                    >
                      Result
                    </Link>
                  </li>
                  <li className="p-2 pb-1">
                    <Link
                      to="/join-us"
                      className="text-blue-900 text-md font-medium uppercase"
                    >
                      Join Us
                    </Link>
                  </li>
                  <li className="p-2 pb-4 border-b-2 border-gray-700">
                    <Link
                      to="/contact"
                      className="text-blue-900 text-md font-medium uppercase"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
