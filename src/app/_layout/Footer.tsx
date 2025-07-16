import Facebook from "@/icons/Facebook";
import Instagram from "@/icons/Instagram";
import Whatsapp from "@/icons/Whatsapp";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#EEF1DA] flex justify-between  p-[5rem] max-md:flex-col">
        <h1 className="font-bold  text-sm max-md:text-center ">
          My-Shopiee
        </h1>

        <div className="   ">
          <h1 className="font-bold text-sm max-md:text-center">
            Links
          </h1>
          <div className="flex   gap-3 max-md:text-center max-md:justify-center ">
            <div>Login</div>
            <div>Contact</div>
            <div>Shop</div>
          </div>
        </div>
        <div className=" flex flex-col ">
          <h1 className="  font-bold text-sm max-md:text-center">
            Get In Touch
          </h1>
          <div className=" font-sans  max-md:text-center">
            <div>Payyannur (via),Kannur District</div>

            <div className="flex max-md:justify-center">
              <Whatsapp className="size-7" />
              <Instagram className="size-7" />
              <Facebook className="size-7" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" border-t  flex justify-center p-[0.5rem] justify-items-stretch  bg-gray-200 text-sm margin-">
        @copyright
      </div> */}
    </div>
  );
};

export default Footer;
