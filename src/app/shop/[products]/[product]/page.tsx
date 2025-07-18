"use client";
import React from "react";
import burger from "../../../../../public/images/delis.jpg";
import Image from "next/image";
import { useCart } from "react-use-cart";

const Page = () => {
  const { addItem, items} = useCart();
  console.log("items::",items);

const product = {
  id: "1",
  image: burger,
  productname: "Casual Dining",
  price: 24990,
  productdescription: "hello",
 
};


  return (
    <div className=" flex pl-15 pt-20 pb-15 bg-amber-700/20">
      <div className="relative h-[400px] w-[1000px] border-2 border-b-amber-400/40]">
        <Image fill src={product.image} className="object-cover" alt="burger" />
      </div>
      <div className="text-amber-950 p-10 ">
        <header className=" font-bold text-3xl">{product.productname}</header>

        <p className="font-semibold ">
         {product.productdescription}
        </p>
        <p className="font-semibold">{product.price}</p>
        <button onClick={() => addItem(product)} className="bg-yellow-700/40 w-[600px] rounded-2xl p-2 mt-3">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Page;
