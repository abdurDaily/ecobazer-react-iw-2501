import React from "react";

const Select = ({lan}) => {

    console.log();
    

  return (
    <div>
      <select name="" id="" className="text-gren-gray-scale-700 font-poppins text-[12px] ">
        {
            lan?.map((language, index) => {
                return(
                    <option key={index} value="">{language}</option>
                )
            })
        }
      </select>
    </div>
  );
};

export default Select;
