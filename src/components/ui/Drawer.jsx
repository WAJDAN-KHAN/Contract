// Drawer.js
import React from 'react';

import logo from '../assets1/logo.png';
import loginIcon from '../assets1/login-icon.svg';
import Dropdown from './Dropdown';
import crossMenu from '../assets1/crossmenu.svg';

const Drawer = ({ isOpen, toggleDrawer, dropdownItems, openDropdown, toggleDropdown }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className="absolute inset-0 bg-black opacity-50" onClick={toggleDrawer}></div>
      <div className="absolute inset-y-0 right-0 w-1/2 bg-black text-white p-4  ">
        <div className="flex justify-between items-center gap-2 mt-10 p-6">
          <img src={logo} className="sm:w-[190px] w-[160px]" alt="" />
          <button onClick={toggleDrawer}>
            {' '}
            <img src={crossMenu} className="" alt="" />
          </button>
        </div>
        <nav className="flex flex-col gap-5">
          <a href="#" className="block text-[#ADADAD] hover:text-white text-[14px] py-2">
            Home
          </a>
          <Dropdown
            label="Blockchain"
            items={dropdownItems.buy}
            isOpen={openDropdown === 'buy'}
            toggleDropdown={() => toggleDropdown('buy')}
          />
          <Dropdown
            label="Tokens"
            items={dropdownItems.exchange}
            isOpen={openDropdown === 'exchange'}
            toggleDropdown={() => toggleDropdown('exchange')}
          />
          <Dropdown
            label="Play"
            items={dropdownItems.play}
            isOpen={openDropdown === 'play'}
            toggleDropdown={() => toggleDropdown('play')}
          />
          <Dropdown
            label="NFTs"
            items={dropdownItems.gaming}
            isOpen={openDropdown === 'gaming'}
            toggleDropdown={() => toggleDropdown('gaming')}
          />
          <Dropdown
            label="Resources"
            items={dropdownItems.Resources}
            isOpen={openDropdown === 'Resources'}
            toggleDropdown={() => toggleDropdown('Resources')}
          />
          <a href="#" className="block text-[#ADADAD] hover:text-white text-[14px] py-2">
            About Us
          </a>
          <a href="#" className="block text-[#ADADAD] hover:text-white text-[14px] py-2">
            Shop
          </a>
          <button className="flex items-center w-full text-center justify-center bg-red-600 py-2 px-4 rounded mt-4">
            <img src={loginIcon} alt="Login" className="mr-2" />
            <span>Log In</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Drawer;
