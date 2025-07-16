import Link from "next/link";
import React from "react";

 const Categories= [
  {
  categoryName:"Casual Dining",
  },
  {
  categoryName:"Delis",
  },
  {
 categoryName:"Buffets",
  },
  {
  categoryName:"Fast Casual",
  },
  
             

]


const page = () => {
  return (
<>
        <div className="flex items-center flex-col pt-15 pb-5">
          <h1 className="text-4xl font-semibold text-amber-950">CATEGORIES</h1>
          <h1 className="text-1xl font-mono text-amber-950">SHOP BY CATEGORIES</h1>
        </div>
          <div className=" grid  grid-cols-4  grid-rows-2 gap-2 p-5 max-md:grid-cols-1  ">
            {Categories.map((item,index) => (
               <Link href={`/shop/${item.categoryName}`} 
               key={index} className="text-amber-950  bottom-0 text-1xl m-1 font-light  bg-amber-800/40 p-20">{item.categoryName}</Link>
          
            ))}
        
           
          </div>
    
</>
  );
};

export default page;
