import Image from "next/image";
import Link from "next/link";
import image1 from "../../../public/images/whtlyt.jpg";

import React from "react";

// const Categories = [
//   {
//     categoryName: "Casual Dining",
//     image: image2,
//   },
//   {
//     categoryName: "Delis",
//     image: image3,
//   },
//   {
//     categoryName: "Buffets",
//     image: image4,
//   },
//   {
//     categoryName: "Fast Casual",
//     image: image5,
//   },
// ];


const page = async() => {

  const res = await fetch('https://dummyjson.com/products/category-list')
  const CategoriesData = await res.json()
  // console.log("cate::",CategoriesData)

  return (
    <>
      <div>
        <div className="relative min-h-[300vh] ">
          <Image src={image1} className="object-cover" fill alt="image1" />

          <div className=" absolute flex  justify-center w-full pt-15">
            <div>
              <h1 className="   text-4xl font-bold text-amber-50 ">
                CATEGORIES
              </h1>
              <h1 className=" text-1xl font-semibold flex justify-center text-amber-50">
                SHOP BY CATEGORIES
              </h1>
            </div>
          </div>

          <div className="absolute  grid  grid-cols-4  grid-rows-2 gap-5 pt-30 max-md:grid-cols-1  ">
            {CategoriesData.map((item: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
              <Link
                href={`/shop/${item}`}
                key={index}
                className="text-amber-50 flex justify-center text-2xl m-1 font-semibold 2 "
              >
                <div className="relative size-70 rounded-s, border-2 border-amber-950 ">
                  <Image
                    src={item.image}
                    fill
                    className="object-cover"
                    alt=""
                  />
                  <p className="absolute ">{item}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
