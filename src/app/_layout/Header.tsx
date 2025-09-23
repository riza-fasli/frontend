"use client";
import Cart from "@/icons/Cart";
import Cross from "@/icons/Cross";
import Hamburger from "@/icons/Hamburger";

import Person from "@/icons/person";

import Link from "next/link";
import React, { useState } from "react";

import { useCart } from "react-use-cart";

const Header = () => {
  const { totalUniqueItems } = useCart();
  const [menu, setMenu] = useState(false);
  // const client = useClient();
  // if (!client)
  //   return null;
  

  return (
    <>
      <div className="h-14 bg-gray-300 flex justify-between items-center  p-[3rem] ">
        <div className=" font-thin text-5xl text-amber-50  flex justify-between ">
          {" "}
        
          BORCELLE Jwellery{" "}
        </div>

        <div className="flex justify-between p-[2rem] items-center gap-[1rem] italic font  text-amber-50  font-bold max-md:hidden">
          <Link href={"/"}>Home</Link>
          <Link href={"/shop"}>Shop</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/login"}>Login</Link>

          <Person className="size-6" />
          <Link href={"/cart"} className="relative">
            <Cart className="size-7" />
            <p className="absolute -top-2  bg-gray-300/40 -right-1 rounded-full size-5 text-sm text-center">
              {totalUniqueItems}
            </p>
          </Link>
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
                <Link href={"/cart"}>
                  <Cart className="size-7  bg-amber-50" />
                </Link>
                <Person className="size-1" />
                <Cross
                  onClick={() => setMenu(false)}
                  className="  absolute top-0 right-0 size-7"
                />
              </div>
            </div>
            <div
              onClick={() => setMenu(false)}
              className="fixed top-0 left-0 h-screen w-1/2 "
            ></div>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
