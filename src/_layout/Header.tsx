import React from "react";

const Header = () => {
  return (
    <div className="h-14 bg-linear-65 from-purple-500 to-pink-500 flex justify-between items-center p-[3rem] ">
      <div className="font-bold font text-3xl text-white">E-COMMERCE </div>

      <div className="flex justify-between p-[2rem] items-center gap-[1rem] text-white font-bold">
     
      
        <h1>Home</h1>
        <h1>Shop</h1>
        <h1>Contact</h1>
        <h1>Login</h1>
      </div>
    </div>
  );
};

export default Header;
