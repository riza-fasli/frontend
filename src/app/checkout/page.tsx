"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import Image from "next/image";
import image1 from "../../../public/images/whtlyt.jpg"
const Page = () => {
  const formschema = z.object({
    firstname: z.string().min(1, ""),
    lastname: z.string().min(1, "d"),
    phonenumber: z.string().min(1, "phone number is required"),
    email: z.string().min(5, "email is required"),
    address: z.string().min(1, "f"),
    zipcode: z.coerce.number().min(1, "sd"),
    country: z.string().min(1, "d"),
  });
  type TFormschema = z.infer<typeof formschema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormschema>({ resolver: zodResolver(formschema) });

  const submit = (data) => console.log("loginData:", data);

  console.log("error:::",errors)

  return (
    
    
      

         <div className='relative h-screen grid grid-cols-3 '>
          <Image src={image1} fill className='object-cover' alt='image2'/>
        
       
      <form
        onSubmit={handleSubmit(submit)}
        className="col-span-2 z-10 "
      >
        <h1 className=" italic text-amber-950 text-4xl mt-9 pl-5">
          Checkout
        </h1>

        <div className=" flex flex-col w-[500px] p-5 italic  ">
          <div className="flex gap-2  ">
            <input
              {...register("firstname")}
              className="w-full  rounded-sm p-2 mt-3 border-2 border-amber-950 hover:hover:bg-[#c29e6f]"
              type="text"
              placeholder="First Name"
            />
            <input
              {...register("lastname")}
              className="w-full rounded-sm p-2 mt-3 border-2 border-amber-950 hover:hover:bg-[#c29e6f]"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <input
            {...register("phonenumber")}
            className="w-full  rounded-sm p-2 mt-3 border-2 border-amber-950 hover:hover:bg-[#c29e6f]"
            type="text"
            placeholder="Phone Number"
          />
          <input
            {...register("email")}
            className="w-full  rounded-sm p-2 mt-3 border-2 border-amber-950 hover:hover:bg-[#c29e6f]"
            type="text"
            placeholder="Email Address"
          />
          <p className="text-red-500">{errors.email?.message}</p>
          <input
            {...register("address")}
            className="w-full rounded-sm p-2 mt-3 border-2 border-amber-950 hover:hover:bg-[#c29e6f]"
            type="text"
            placeholder="Address"
          />
          <input
            {...register("zipcode")}
            className="w-full rounded-sm p-2 mt-3 border-2 border-amber-950 hover:hover:bg-[#c29e6f]"
            type="number"
            placeholder="Zip Code"
          />

          <select
            {...register("country")}
            className="w-full  rounded-sm p-2 mt-3 border-2 border-amber-950 hover:hover:bg-[#c29e6f]"
          >
            <option selected disabled>
              Country/Region
            </option>
            <option value="usa">usa</option>
            <option value="india">india</option>
            <option value="UK">uk</option>
            <option value="america">america</option>
          </select>

          <button
            className="w-full hover:bg-[#A86523]  bg-yellow-700/40 rounded-sm p-2 mt-3 "
            type="submit"
          >
            Place Order
          </button>
        </div>
      </form>
      <div className="text-amber-950 italic p-10 col-span-1 shadow-2xl z-10">
        <header className="font-bold text-2xl">Order Summary</header>
        <h1 className="mt-4">Item Total: ₹0.00</h1>
        <h1 className="mt-4">Shipping: ₹0.00</h1>
        <h1 className="mt-4">Total: ₹0.00</h1>
      </div>
    </div>
  );
};

export default Page;
