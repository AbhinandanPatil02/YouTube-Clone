



import React, { useEffect, useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import logo from "../../public/logo.png";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import Avatar from 'react-avatar';
import profile from "../../public/OIP.jpeg";
import { useNavigate } from 'react-router-dom';
import { useUtils } from '../context/UtilContext';

const Navbar = () => {
  const { isSidebar, setIsSidebar, mobileShow, setMobileShow } = useUtils();

  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if ((event?.key === "Enter" || event === "searchButton") && searchQuery?.length > 0) {
      navigate(`/search/${searchQuery}`);
    }
  };

  const handleSidebar = () => {
    if (window.innerWidth <= 1280) {
      setMobileShow(!mobileShow);
    } else {
      setIsSidebar(!isSidebar);
    }
  };

  return (
    <div className='bg-white w-full fixed top-0 left-0 z-10'>
      <div className='flex justify-between px-6 py-2'>
        <div className='flex items-center space-x-4'>
          <IoMdMenu className='text-xl cursor-pointer' onClick={handleSidebar} />
          <img src={logo} className='w-24 cursor-pointer' alt="Logo" />
        </div>

        <div className='flex items-center w-[35%]'>
          <div className='flex-grow px-4 py-2 border border-gray-400 rounded-l-full'>
            <input
              type="text"
              placeholder='Search'
              className='w-full outline-none'
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              value={searchQuery}
            />
          </div>
          <button onClick={() => searchQueryHandler("searchButton")} className='px-4 bg-gray-100 border border-gray-400 py-2 rounded-r-full'>
            <CiSearch size={"24px"} />
          </button>
          <IoMdMic size={"40px"} className='ml-3 border border-gray-400 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200' />
        </div>

        <div className='flex items-center space-x-5'>
          <RiVideoAddLine className='text-2xl cursor-pointer' />
          <AiOutlineBell className='text-2xl cursor-pointer' />
          <Avatar src={profile} className='cursor-pointer' round={true} size="32" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

