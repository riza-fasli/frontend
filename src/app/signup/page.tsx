"use client";
import React, { useState } from "react";
import Link from "next/link";
import Eye from "@/icons/Eye";
import Eyeoff from "@/icons/Eyeoff";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const Page = () => {
  const loginschema = z.object({
  email: z.string().min(5, "email is required"),
  password: z.string().min(5, "password is required"),
});
type TLoginschema = z.infer<typeof loginschema>;

  const [show, setShow] = useState(false);
   const {register, handleSubmit,
     formState :{errors}, 
    }= useForm <TLoginschema>({resolver:zodResolver(loginschema)
    });

    const submit = (data) => console.log("loginData:", data);



  return (
    <div >
      <div className=" relattive    bg-amber-600/40 w-fit m-auto mt-30 mb-30">
        <div className="flex justify-center items-center text-amber-900 p-9 flex-col font-bold">
          <h1 className="text-3xl tex">SIGN UP TO YOUR ACCOUNT</h1>
          <h1 className="text-1xl">PLEASE ENTER YOUR DETAILS</h1>
  
          <form onSubmit={handleSubmit(submit)}>

            <input {...register("username")}
              className="w-full bg-amber-900/40 rounded-2xl p-2 mt-7"
              type="text "
              placeholder="Username"
            />

            <input {...register("email")}
              className="w-full bg-amber-900/40 rounded-2xl p-2 mt-3"
              type="text"
              placeholder="Email"

            />
             <p className="text-red-500">{errors.email?.message}</p>
  
            <div className="relative w-full">
              <input
                {...register("password")}
                className="w-full bg-amber-900/40 rounded-2xl p-2 mt-3 "
                type="password"
                placeholder="Password"
              />
               <p className="text-red-500">{errors.password?.message}</p>

              <div onClick={() => setShow(!show)}>
                {show == false ? (
                  <Eyeoff className="absolute top-1/2 right-3 size-5" />
                ) : (
                  <Eye className="absolute top-1/2 right-3 size-5" />
                )}
              </div>
            </div>
            <div className="relative w-full">
              <input
                {...register("confirm password")}
                className="w-full bg-amber-900/40 rounded-2xl p-2 mt-3 "
                type="password"
                placeholder="Confirm Password"
              />
             
              <div onClick={() => setShow(!show)}>
                {show == false ? (
                  <Eyeoff className="absolute top-1/2 right-3 size-5" />
                ) : (
                  <Eye className="absolute top-1/2 right-3 size-5" />
                )}
              </div>
            </div>
  
            <button className="bg-yellow-700 w-full rounded-2xl p-2 mt-3">
              Sign Up
            </button>
  
            <p>
              Already have an account? <Link href={"/login"}>Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
