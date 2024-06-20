import React from 'react';
import logo from "../assets/Blitzfire.svg"
const Menu: React.FC = () => {
  return (
    <div className="bg-[#1d2227] text-white flex justify-between text-sm p-1">
      <div className="flex space-x-2">
        <span><img src={logo} className='h-6 w-6' alt="Blitzfire" /></span>
        <button className="hover:bg-[#2c343b] px-2 rounded-lg">File</button>
        <button className="hover:bg-[#2c343b] px-2 rounded-lg">Edit</button>
        <button className="hover:bg-[#2c343b] px-2 rounded-lg">Run</button>
        <button className="hover:bg-[#2c343b] px-2 rounded-lg">Setting</button>
      </div>
    </div>
  );
};

export default Menu;
