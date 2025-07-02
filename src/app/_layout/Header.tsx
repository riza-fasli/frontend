"use client";
import Cart from "@/icons/Cart";
import Cross from "@/icons/Cross";
import Hamburger from "@/icons/Hamburger";

import Person from "@/icons/person";
import React, { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="h-14 bg-linear-65 from-purple-500 to-pink-500 flex justify-between items-center p-[3rem] ">
        <div className="font-bold font text-3xl text-white">E-COMMERCE </div>

        <div className="flex justify-between p-[2rem] items-center gap-[1rem] text-white font-bold max-md:hidden">
          <h1>Home</h1>
          <h1>Shop</h1>
          <h1>Contact</h1>
          <h1>Login</h1>

          <Person className="size-9" />
          <Cart className="size-7" />
        </div>

        {menu === false ? (
          <Hamburger
            onClick={() => setMenu(true)}
            className="size-9 hidden max-md:block"
          />
        ) : (
          <>
            <div className="fixed top-0 right-0  bg-violet-400 h-screen w-1/2 font-bold flex flex-col justify-center items-center text-amber-50">
              <h1>Home</h1>
              <h1>Shop</h1>
              <h1>Contact</h1>
              <h1>Login</h1>
  
              <div className="flex gap-2 ">
                <Cart className="size-7" />
                <Person className="size-7" />
                <Cross
                  onClick={() => setMenu(false)}
                  className="absolute top-0 right-0 size-9"
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
