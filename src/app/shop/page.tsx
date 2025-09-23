import Image from "next/image";
import Link from "next/link";

import React from "react";
import { Api } from "@/api/config/Api";
import { StorageUrl } from "@/utils/BaseUrl";

const getAllShopPageData = async () => {
  const response = await Api.getAllShopPageData();
  console.log(response.data.data)
  return response.data.data
};




 const page = async  () =>{
  const Shoppage = await getAllShopPageData();
console.log("shoppage::::",Shoppage)
const categories = Shoppage.categories
  return (
    <>
      <div>
        <div className="relative min-h-[300vh] ">
         

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
            {categories.map ((item: {name: string , _id:string, description:string , image:string } , index:React.key )=>(
               <Link
               href={`/shop/${item._id}`}
                key={index}
                className="text-amber-50 flex justify-center text-2xl m-1 font-semibold 2 "
              >
                <div className="relative size-70 rounded-s, border-2 border-amber-950 ">
                  <Image
                    src={StorageUrl + item.image}
                    fill
                    className="object-cover"
                    alt=""
                  />
                  <p className="absolute ">{item.name}</p>
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
