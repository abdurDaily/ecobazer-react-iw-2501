import React from 'react';
import { FaHome } from "react-icons/fa";
import Header from './Header';


const Navigation = () => {
    return (
        <div>
            <Header />
            <h1 className='font-poppins'>Navigation Component</h1>
            <FaHome />
        </div>
    );
};

export default Navigation;