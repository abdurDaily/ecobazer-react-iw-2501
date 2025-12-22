import React, { useEffect, useRef, useState } from "react";
import mixitup from "mixitup";
import { FaStar } from "react-icons/fa6";


const Home = () => {


  let el = useRef(null);
  let [active, setActive] = useState("all");

  useEffect(() => {
    if (el.current) {
      mixitup(el.current);
    }
  }, []);

  let underlineStatus =
    "cursor-pointer relative before:absolute before:left-0 before:w-[100%] before:h-[2px] before:bg-branding-success before:-bottom-[10px]";

  return (
    <div className="container mx-auto">
      <h2 className="text-center font-poppins font-[600] text-[40px] leading-[120%] text-gray-scale-gray--900 my-5">
        Introducing Our Products
      </h2>

      <div>
        <div className="text-center text-[16px] text-gray-scale-gray--500 ">
          <button
            onClick={() => {
              setActive("all");
            }}
            className={`me-5  capitalize ${
              active == "all" ? underlineStatus : ""
            }`}
            type="button"
            data-filter="all"
          >
            All
          </button>
          <button
            onClick={() => {
              setActive("a");
            }}
            className={`me-5  capitalize ${
              active == "a" ? underlineStatus : ""
            }`}
            data-filter=".category-a"
          >
            Vegetable
          </button>
          <button
            onClick={() => {
              setActive("b");
            }}
            className={`me-5  capitalize ${
              active == "b" ? underlineStatus : ""
            }`}
            data-filter=".category-b"
          >
            Fruit
          </button>
          <button
            onClick={() => {
              setActive("c");
            }}
            className={`me-5  capitalize ${
              active == "c" ? underlineStatus : ""
            }`}
            data-filter=".category-c"
          >
            Meat & Fish
          </button>
          <button
            onClick={() => {
              setActive("d");
            }}
            className={`me-5  capitalize ${
              active == "d" ? underlineStatus : ""
            }`}
            data-filter=".category-c"
          >
            View All
          </button>
        </div>

        <div ref={el} class="container">
          <div className="grid grid-cols-4">
            <div class="mix category-a" data-order="1">
              <div className="hover:shadow-[0_0_12px_0_rgba(32,181,38,0.32)] p-5 hover:outline hover:outline-branding-success">
                <img src="/images/1.png" alt="" />
                <div>
                  <h3 className="font-poppins font-[400] text-[16px] text-gren-gray-scale-700">Green Apple</h3>
                  <div className="flex gap-2">
                    <span className="font-[500] text-[18px] text-gren-gray-scale-900">$14.99</span>
                  <del className="text-gren-gray-scale-400">$20.99</del>
                  </div>
                  <div className="mt-3">
                    <span className="text-[#FF8A00]"><FaStar /></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="mix category-b" data-order="2">
               <div className="hover:shadow-[0_0_12px_0_rgba(32,181,38,0.32)] p-5 hover:outline hover:outline-branding-success">
                <img src="/images/1.png" alt="" />
                <div>
                  <h3 className="font-poppins font-[400] text-[16px] text-gren-gray-scale-700">Green Apple</h3>
                  <div className="flex gap-2">
                    <span className="font-[500] text-[18px] text-gren-gray-scale-900">$14.99</span>
                  <del className="text-gren-gray-scale-400">$20.99</del>
                  </div>
                  <div className="mt-3">
                    <span className="text-[#FF8A00]"><FaStar /></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="mix category-b category-c" data-order="3">
               <div className="hover:shadow-[0_0_12px_0_rgba(32,181,38,0.32)] p-5 hover:outline hover:outline-branding-success">
                <img src="/images/1.png" alt="" />
                <div>
                  <h3 className="font-poppins font-[400] text-[16px] text-gren-gray-scale-700">Green Apple</h3>
                  <div className="flex gap-2">
                    <span className="font-[500] text-[18px] text-gren-gray-scale-900">$14.99</span>
                  <del className="text-gren-gray-scale-400">$20.99</del>
                  </div>
                  <div className="mt-3">
                    <span className="text-[#FF8A00]"><FaStar /></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="mix category-a category-d" data-order="4">
              <div className="hover:shadow-[0_0_12px_0_rgba(32,181,38,0.32)] p-5 hover:outline hover:outline-branding-success">
                <img src="/images/1.png" alt="" />
                <div>
                  <h3 className="font-poppins font-[400] text-[16px] text-gren-gray-scale-700">Green Apple</h3>
                  <div className="flex gap-2">
                    <span className="font-[500] text-[18px] text-gren-gray-scale-900">$14.99</span>
                  <del className="text-gren-gray-scale-400">$20.99</del>
                  </div>
                  <div className="mt-3">
                    <span className="text-[#FF8A00]"><FaStar /></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="mix category-a category-a" data-order="4">
              <div className="hover:shadow-[0_0_12px_0_rgba(32,181,38,0.32)] p-5 hover:outline hover:outline-branding-success">
                <img src="/images/1.png" alt="" />
                <div>
                  <h3 className="font-poppins font-[400] text-[16px] text-gren-gray-scale-700">Green Apple</h3>
                  <div className="flex gap-2">
                    <span className="font-[500] text-[18px] text-gren-gray-scale-900">$14.99</span>
                  <del className="text-gren-gray-scale-400">$20.99</del>
                  </div>
                  <div className="mt-3">
                    <span className="text-[#FF8A00]"><FaStar /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
