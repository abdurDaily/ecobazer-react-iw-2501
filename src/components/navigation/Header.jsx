import React from "react";
import { FiMapPin } from "react-icons/fi";
import Select from "../../utills/Select";

const Header = () => {
  let languages = ["Bng", "Eng", "Arb"];
  let currency = ["USD", "BDT", "INR"];

  return (
    <div className="bg-gren-gray-scale-50">
      <div className="hidden container mx-auto lg:visible lg:flex justify-between items-center px-5 py-3 ">
        <div className="flex items-center gap-3">
          <span className="text-gren-gray-scale-700">
            <FiMapPin />
          </span>
          <p className="font-poppins text-[12px] text-gren-gray-scale-700">
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </p>
        </div>

        <div className="flex gap-3">
          <Select lan={languages} />
          <Select lan={currency} />
        </div>
      </div>
    </div>
  );
};

export default Header;
