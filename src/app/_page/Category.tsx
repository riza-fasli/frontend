import Image from "next/image";
import React from 'react'

import purple from "../../../public/images/delis.jpg"
import burger from "../../../public/images/casual dining.jpg"
import biriyani from "../../../public/images/bffets.jpg"
import chicken from "../../../public/images/fast casual2.jpg"


import Link from "next/link";

 const CategoryData = [
  {image:purple,
  CategoryName:"Delis",
  },
  {image:burger,
  CategoryName:"Casual Dining",
  },
  {image:biriyani,
  CategoryName:"Buffets",
  },
  {image:chicken,
  CategoryName:"Fast Casual",
  },
  
             

]



const Category = () => {
  return (
    <div className="bg-amber-950">
    <h1 className='font-mono text-5xl flex justify-center text-amber-50 p-15 pb-5  bg-amber-950 '>Food Categories</h1>
     
    <div className=" grid grid-cols-3 grid-rows-2 gap-10 p-5 max-md:grid-cols-1 ">
      <Link href={"/"} className="relative h-[500px] col-span-1 row-span-2 ">
      <Image fill src={CategoryData[0].image} className="object-cover" alt="purple" />
      <p className="absolute bottom-0 text-2xl m-1 font-mono text-amber-50 bg-amber-950 p-2">{CategoryData[0].CategoryName}</p>
      </Link>
  
      <Link href={"/"} className="relative h-[500px] col-span-1 row-span-2 ">
      <Image fill src={CategoryData[1].image} className="object-cover" alt="burger" />
      <p className="absolute bottom-0 text-2xl m-1 font-mono text-amber-50 bg-amber-950 p-2">{CategoryData[1].CategoryName}</p>
      </Link>
  
      <Link href={"/"} className="relative h-auto col-span-1 row-span-1 max-md:h-[500px] ">
      <Image fill src={CategoryData[2].image} className="object-cover" alt="biriyani" />
      <p className="absolute bottom-0 text-2xl m-1 font-mono text-amber-50 bg-amber-950 p-2">{CategoryData[2].CategoryName}</p>
      </Link>
  
      <Link href={"/"} className="relative h-auto col-span-1 row-span-1 max-md:h-[500px]">
      <Image fill src={CategoryData[3].image} className="object-cover" alt="chicken" />
      <p className="absolute bottom-0 text-2xl m-1 font-mono text-amber-50 bg-amber-950 p-2">{CategoryData[3].CategoryName}</p>
      </Link>

     
    </div>
     
    
  </div>

  );
};

export default Category