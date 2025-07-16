import React from "react";
import Image, { StaticImageData } from "next/image";


type props = {
  productName: string;
  productDescription: string;
  price: number;
  image: string | StaticImageData;
};

const Card = ({ productName, image, productDescription, price }: props) => {
  return (
    <div>
      <div className="">
    
        <div className="w-auto shadow-2xl rounded-3xl">
          <div className="relative h-[250px]">
            <Image
              fill
              src={image}
              className="object-cover rounded-t-3xl"
              alt=""
            />
          </div>

          <div className="p-7">
            <h1 className="font-semibold text-2xl ">{productName}</h1>
            <p>{productDescription}</p>
            <p>₹{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
