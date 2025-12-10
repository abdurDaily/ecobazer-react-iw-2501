import React, { Children } from 'react';
import { Link } from 'react-router';
import { IoIosArrowDown } from "react-icons/io";


const Dropdown = () => {

    let menuItems = [
      { id: 1, title: "Home", path: "/" },
      { id: 2, title: "About", path: "/about" },
      {
        id: 2,
        title: "Services",
        path: "/services",
        children: [
            { id: 1, title: "sub menu 1", path: "/one" },
            { id: 2, title: "sub menu 2", path: "/two" },
        ],
      },
      { id: 3, title: "Contact", path: "/contact" },
    ];

    return (
        <div>
            <ul className='flex gap-5 '>
                {
                    menuItems?.map((menu)=>{
                        return (
                          <li className="relative group">
                            <Link
                              className="flex items-center gap-1 text-[14px] font-[500] text-gray-scale-gray--500 font-poppins"
                              key={menu.id}
                              to={menu.path}
                            >
                              {menu.title}
                              {menu.children && (
                                <span className="mt-1">
                                  <IoIosArrowDown />
                                </span>
                              )}
                            </Link>

                            <ul className="group-hover:mt-0 group-hover:visible transition-all duration-200 invisible bg-white shadow absolute w-[150px] left-0 top-full mt-5">
                              {menu.children?.map((submenu) => {
                                return (
                                  <li className="px-5 py-2 text-[14px] font-[500] text-gray-scale-gray--500 hover:text-white font-poppins hover:bg-gray-scale-gray--500">
                                    <Link to={submenu.path}>
                                      {submenu.title}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </li>
                        );
                    })
                }
                
            </ul>
        </div>
    );
};

export default Dropdown;