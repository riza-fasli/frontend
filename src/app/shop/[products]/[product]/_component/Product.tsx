"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { useCart } from "react-use-cart";
import image1 from "../../../../../../public/images/whtlyt.jpg";
import { StorageUrl } from "@/utils/BaseUrl";

type props = {
  product: {
    id: string;
    _id: string;
    image: StaticImageData;
    name: string;
    description: string;
    price: number;
    brand: string;
  };
};
const Product = ({ product }: props) => {
  console.log("product:::", product);

  const formattedProduct = {
    ...product,
    id: product._id,
  };
  console.log("formattedproduct:::", formattedProduct);

  const { addItem,items } = useCart();
  console.log("items::",items)

  return (
    <div>
      <div className="relative h-screen ">
        <Image src={image1} fill className="object-cover" alt="image1" />

        <div className="absolute z-10 flex pl-10 pt-10 pb-10">
          <div className="relative h-[500px] w-[500px] border-2 border-b-amber-400/40]">
            <Image
              fill
              src={StorageUrl + product.image}
              className="object-cover"
              alt="burger"
            />
          </div>
          <div className="text-amber-950 p-10  ">
            <header className=" italic  text-4xl ">{product.name}</header>

            <p className="  italic mt-6 ">{product.description}</p>
            <p className="  italic mt-6 ">{product.brand}</p>
            <p className=" italc mt-3">{product.price}</p>
            <button
              onClick={() => addItem(formattedProduct)}
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
