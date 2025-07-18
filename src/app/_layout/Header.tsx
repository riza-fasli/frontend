"use client";
import Cart from "@/icons/Cart";
import Cross from "@/icons/Cross";
import Hamburger from "@/icons/Hamburger";

import Person from "@/icons/person";
import Spoon from "@/icons/Spoon";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="h-14 bg-amber-950 flex justify-between items-center  p-[3rem] ">
        <div className="font-mono font text-5xl text-amber-50  flex justify-between "> <Spoon className='size-9'/>Zestzy </div>
       
        

        <div className="flex justify-between p-[2rem] items-center gap-[1rem] text-amber-50 font-bold max-md:hidden">
          <Link href={"/"}>Home</Link>
          <Link href={"/shop"}>Shop</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/login"}>Login</Link>

          <Person className="size-6" />
          <div className="relative"><Cart className="size-7" />
          <p className="absolute -top-2  bg-amber-700/60 -right-1 rounded-full size-5 text-sm text-center">0</p></div>
        </div>

        {menu === false ? (
          <Hamburger
            onClick={() => setMenu(true)}
            className="size-5 hidden max-md:block"
          />
        ) : (
          <>
            <div className="fixed top-0 right-0 bg-amber-100">
              <h1>Home</h1>
              <h1>Shop</h1>
              <h1>Contact</h1>
              <h1>Login</h1>
  
              <div className="flex gap-2 ">
                <Link href={"/cart"}><Cart className="size-7" /></Link>
                <Person className="size-1" />
                <Cross
                  onClick={() => setMenu(false)}
                  className="  absolute top-0 right-0 size-7"
                />
              </div>
            </div>
            <div onClick={() => setMenu(false)} className="fixed top-0 left-0 h-screen w-1/2 ">
  
              
            </div>
            
           
          </>
        )}
      </div>
    </>
  );
};

export default Header;
