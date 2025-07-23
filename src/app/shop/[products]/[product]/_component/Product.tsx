"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { useCart } from "react-use-cart";
import image1 from "../../../../../../public/images/whtlyt.jpg";

type props = {
  product: {
    id: string;
    thumbnail: StaticImageData;
    title: string;
    description: string;
    price: number;

  };
};
const Product = ({ product }: props) => {
  console.log("product:::", product);
  const { addItem } = useCart();

  

  return (
    <div>
      <div className="relative h-screen ">
        <Image src={image1} fill className="object-cover" alt="image1" />

        <div className="absolute z-10 flex pl-10 pt-10 pb-10">
          <div className="relative h-[500px] w-[500px] border-2 border-b-amber-400/40]">
            <Image
              fill
              src={product.thumbnail}
              className="object-cover"
              alt="burger"
            />
          </div>
          <div className="text-amber-950 p-10  ">
            <header className=" italic  text-4xl ">
              {product.title}
            </header>

            <p className="  italic mt-6 ">{product.description}</p>
            <p className=" italc mt-3">{product.price}</p>
            <button
              onClick={() => addItem(product)}
              className="z-20 cursor-auto hover:bg-[#A86523] bg-yellow-700/40 w-[600px]  rounded-2xl p-2 mt-3"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
