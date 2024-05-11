"use client"
import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { smile } from "@/assets";
import { useState } from "react";

const NavbarItems = ({title, classProps}) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Image
          src={smile}
          alt="logo"
          height={100}
          width={100}
          className="w-32 cursor-pointer"
        />
      </div>

      <ul className="text-[#fff] md:flex hidden list-none flex-row items-center justify-between  flex-initial">
        {["Market", "Exchange", "Rates", "Trades"].map((item, index) => (
          <NavbarItems key={item + index} title={item} />
        ))}
      </ul>
      <div>
          {toggleMenu ? (
              <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)}/>
          ) : (
            <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)}/>
          )}
          {toggleMenu && (
            <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw]">
              <li>
                <AiOutlineClose onClick={() => setToggleMenu(false)}/>
              </li>
              {["Market", "Exchange", "Rates", "Trades"].map((item ,index) => (
                <NavbarItems key={item + index} title={item} classProps="my-2 text-lg"/>
              ))}
            </ul>
          )}
      </div>
    </nav>
  );
};

export default Navbar;
