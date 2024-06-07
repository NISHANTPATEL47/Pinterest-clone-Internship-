import React from "react";
// import Dropdownlogo from "@/assets/dropdown.svg";

const Header = () => {
  return (
    <>
      <div className="w-full px-10 py-3 flex justify-between items-center bg-white text-gray-900 gap-10">
        <img
          src="https://i.pinimg.com/originals/d3/d1/75/d3d175e560ae133f1ed5cd4ec173751a.png"
          alt="pin logo"
          className="w-12 h-12"
        />
        <div className="w-full h-14 mx-10 px-10 bg-zinc-100 rounded-full flex items-center justify-between hover:bg-zinc-200 ">
          <div className="flex items-center gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="rgba(140,140,140,1)"
            >
              <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
            </svg>
            <input
              id="q"
              className="bg-zinc-100 rounded-full px-3 py-2 "
              placeholder="Search"
              type="search"
              name="q"
            />
          </div>
          <div className="flex w-auto items-center gap-5">
            <div className="w-1 h-10 bg-neutral-300"></div>
            <a href="/feed" className="font-medium inline-flex">
              All Pins{" "}
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="rgba(21,29,43,1)"
            >
              <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
            </svg>
          </div>
        </div>
        <div className="flex gap-10 items-center">
          <a href="/App" className="">
            Profile
          </a>
          <a href="/feed">Feed</a>
          <a href="/Login" className="px-3 py-1 bg-red-600 text-white rounded-full">
            Logout
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
