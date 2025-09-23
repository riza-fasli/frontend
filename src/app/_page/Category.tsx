import Image from "next/image";
import React from 'react'

import purple from "../../../public/images/delis.jpg"
import burger from "../../../public/images/casual dining.jpg"
import biriyani from "../../../public/images/bffets.jpg"
import chicken from "../../../public/images/fastcsl.jpg"
import { StorageUrl } from "@/utils/BaseUrl";
import Link from "next/link";


// import Link from "next/link";

//  const CategoryData = [
//   {image:purple,
//   CategoryName:"Delis",
//   },
//   {image:burger,
//   CategoryName:"Casual Dining",
//   },
//   {image:biriyani,
//   CategoryName:"Buffets",
//   },
//   {image:chicken,
//   CategoryName:"Fast Casual",
//   },
  
             

// ]



const Category = ({CategoryData}) => {
  console.log("category::::",CategoryData)
  return (
    <div >
    <h1 className=' text-5xl flex justify-center text-gray-500/40 p-10 pb-5   '>OUR PRODUCTS</h1>
     
    <div className=" grid grid-cols-3 grid-rows-2 gap-3 p-3 max-md:grid-cols-1 ">
      <Link href={"/"} className="relative h-[500px] col-span-1 row-span-2 ">
      <Image fill src={StorageUrl+ CategoryData[0].image} className="object-cover" alt="purple" />
      <p className="absolute bottom-0 text-2xl m-1  font-mono text-amber-50/60  p-2">{CategoryData[0].name}</p>
      </Link>
  
      <Link href={"/"} className="relative h-[500px] col-span-1 row-span-2 ">
      <Image fill src={StorageUrl+ CategoryData[1].image} className="object-cover" alt="burger" />
      <p className="absolute bottom-0 text-2xl m-1  text-amber-50/60  p-2">{CategoryData[1].name}</p>
      </Link>
  
      <Link href={"/"} className="relative h-auto col-span-1 row-span-1 max-md:h-[500px] ">
      <Image fill src={StorageUrl+ CategoryData[2].image} className="object-cover" alt="biriyani" />
      <p className="absolute bottom-0 text-2xl m-1  text-amber-50/60  p-2">{CategoryData[2].name}</p>
      </Link>
  
      <Link href={"/"} className="relative h-auto col-span-1 row-span-1 max-md:h-[500px]">
      <Image fill src={StorageUrl+ CategoryData[3].image} className="object-cover" alt="chicken" />
      <p className="absolute bottom-0 text-2xl m-1  text-amber-50/60  p-2">{CategoryData[3].name}</p>
      </Link>

     
    </div>
     
    
  </div>

  );
};

export default Category