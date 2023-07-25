import React, { useRef, useState, useEffect, useContext } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../../assets/otherAssets/logo.png';
import { Tooltip } from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";
import avatar from "../../assets/images/avatar.jpg";
import { AuthContext } from "../AppContext/AppContext";
import { Link } from "react-router-dom";



const PCNavBar = () => {
  const [nav, setNav] = useState(false);
  const { signOutUser, user, userData } = useContext(AuthContext);

  const handleNav = () => {
    setNav(!nav);
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Gala");
  const locations = ["CAVITE", "LAGUNA", "BATANGAS", "RIZAL", "QUEZON"];

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setDropdownOpen(false);
    // Navigate to the desired route when "Cavite" is selected
    
  };


  return (
    <div className="flex justify-between items-center h-24 max-w-full  text-black">
      <div className=" flex justify-between items-center bg-[#FBE470] z-10 h-[100px] w-full fixed">
      <Link to='/ragalahome'><img src={Logo} alt="" className="h-[150px]" /></Link>
      <ul className="hidden md:flex mr-[60px]">
        <li className="p-4">
          <Link to='/ragalahome'>Home</Link>
        </li>
        <li className="p-4">
          <Link to='/todo'>To Do</Link>
        </li>
        <li className="p-4">
          <Link to='/expenses'>Expenses</Link>
        </li>
        <li className="p-4">
          <Link to='/'>Social</Link>
        </li>
        {/* Dropdown */}
        <li
          className="relative p-4 cursor-pointer"
          onClick={handleDropdownToggle}
        >
          {selectedLocation}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6 h-6 inline-block ml-1 text-gray-500"
          >
            <path
              fillRule="evenodd"
              d="M4.293 6.293a1 1 0 011.414 0L10 10.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          {/* Dropdown Content */}
          {dropdownOpen && (
            <ul className="absolute top-10 right-0 w-48 bg-white border border-gray-300 rounded-md shadow-md">
                {locations.map((location) => (
                <li key={location} className="p-2 cursor-pointer hover:bg-gray-100">
                  <Link to={`/${location.toLowerCase()}`}>{location}</Link>
                </li>
              ))}

            </ul>
          )}
        </li>
        <li >
        <Tooltip content="Profile" placement="top">
            <Avatar size="md" src={user?.photoURL || avatar} alt="avatar" className="rounded-full h-[50px] w-[50px]"></Avatar>
          </Tooltip>
        </li>
        <li className="p-4">
      <div className="mx-4 flex items-center" onClick={signOutUser}>

      <div className="hover:translate-y-1 duration-500 ease-in-out hover:text-blue-500">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
        </svg>
        </div>
        </div>
        </li>
        
      </ul></div>
      <div onClick={handleNav} className="block md:hidden  z-10">
        {nav ? (
          <AiOutlineClose size={20} className="PCNavBar-icon fixed right-0 mr-[50px]"  />
        ) : (
          <AiOutlineMenu size={20} className="PCNavBar-icon fixed right-0 mr-[50px]" />
        )}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r z-10 border-r-gray-900 bg-[#FBE470] text-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <img src={Logo} alt="" className="h-[100px] m-4" />
        <ul className="uppercase p-4">
        <li>
        <Tooltip content="Profile" placement="top">
            <Avatar size="md" src={user?.photoURL || avatar} alt="avatar" className="rounded-full h-[50px] w-[50px]"></Avatar>
          </Tooltip>
        </li>
          <li className="p-4 border-b border-gray-600">
            <Link to='/ragalahome'>Home</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to='/todo'>To Do</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to='/expenses'>Expenses</Link>
          </li>
          <li className="p-4">
            <Link to='/'>Social</Link>
          </li>
          <li className="p-4">
      <div className="mx-4 flex items-center" onClick={signOutUser}>

      <div className="hover:translate-y-1 duration-500 ease-in-out hover:text-blue-500">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
        </svg>
        </div>
        </div>
        </li>
        
          
        </ul>
      </div>
    </div>
  );
};

export default PCNavBar;