"use client";
import Eye from "@/icons/Eye";
import Eyeoff from "@/icons/Eyeoff";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import z from "zod";
import { authClient } from "@/lib/auth-client";

const Page = () => {
  const loginschema = z.object({
    email: z.string().min(5, "email is required"),
    password: z.string().min(4, "password is required"),
  });
  type TLoginschema = z.infer<typeof loginschema>;

  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginschema>({ resolver: zodResolver(loginschema) });

  const submit = async (data: TLoginschema) => {
    console.log("loginData:", data);

    const response = await authClient.signIn.email(
      {
        email: data.email,
        password: data.password,
      },
      {
        onRequest: () => {
          // setPending(true);
        },


  onSuccess: (ctx)=>{
    const authToken = ctx.response.headers.get("set-auth-token") // get the token from the response headers
    // Store the token securely (e.g., in localStorage)
    if(authToken){
    localStorage.setItem("accessToken", authToken);
  }

  const userId = ctx.data.user.id;
  if(userId){
    localStorage.setItem("userId",userId)
  }
  },


        onError: (error) => {
          // setPending(false);
          window.alert("Error");
          console.log("error:::", error);
        },
      }
    );
  };

  return (
    <div className="relative h-screen grid grid-cols-3 pl-90 ">
      <form onSubmit={handleSubmit(submit)}>
        <div className="absolute relattive    bg-gray-400 w-fit m-auto mt-30 mb-30">
          <div className=" flex justify-center items-center text-gray-200/60 p-9 flex-col font-bold">
            <h1 className="text-4xl">LOGIN TO YOUR ACCOUNT</h1>
            <h1 className="text-2xl mt-1">PLEASE ENTER YOUR DETAILS</h1>

            <div className="w-full">
              <input
                {...register("email")}
                className="w-full text-amber-50 rounded-2xl p-2 mt-7 "
                type="text "
                placeholder="email"
              />

              <p className="text-red-500">{errors.email?.message}</p>
            </div>

            <div className="relative w-full">
              <input
                {...register("password")}
                className="w-full text-amber-50 rounded-2xl p-2 mt-3 "
                type="password"
                placeholder="password"
              />
              <div onClick={() => setShow(!show)}>
                {show == false ? (
                  <Eyeoff
                    className="absolute top-1/3 right-3 size-5 "
                    type="password"
                  />
                ) : (
                  <Eye
                    className="absolute top-1/3 right-3 size-5 "
                    type="text"
                  />
                )}
              </div>
              <p className="text-red-500">{errors.password?.message}</p>
            </div>

            <button className="text-gray-200/60 w-full rounded-2xl p-2 mt-3">
              Login
            </button>
            <p>
              Don't have an account? <Link href={"/signup"}>Sign Up</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page;
