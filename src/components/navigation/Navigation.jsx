import React from "react";
import { FaHome } from "react-icons/fa";
import Header from "./Header";
import Dropdown from "../../utills/Dropdown";
import { FiPhoneCall } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiBag1 } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";


const Navigation = () => {
  return (
    <div className="">
      <Header />

      <div className="container px-6 mx-auto py-[15px]">
        <div className="grid grid-cols-5 ">
          <div className="col-span-2  flex items-center">
            <Dropdown />
          </div>
          <div className="col-span-1">
            <img src="/images/Logo.png" alt="" />
          </div>
          <div className="col-span-2  flex gap-6 justify-end items-center">
            <div className="flex items-center gap-2">
              <span className="text-xl">
                <FiPhoneCall />
              </span>
              <span>(219) 555-0114</span>
            </div>
            <div>
              <ul className="flex items-center gap-5">
                <li className="text-2xl">
                  <CiSearch />
                </li>
                <li className="text-2xl">
                  <CiHeart />
                </li>
                <li className="text-2xl relative">
                  <CiBag1 />

                  <span className="absolute text-[10px] top-0 -right-[5px] bg-green-600 border border-white w-[15px] h-[15px] flex items-center justify-center rounded-full text-white p-1">0</span>

                </li>
                <li className="text-xl">
                  <FaRegUser />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
