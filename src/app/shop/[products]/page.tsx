import Card from "@/Components/Card";
import React from "react";
import image2 from "../../../../public/images/whtlyt.jpg";
import Link from "next/link";
import Image from "next/image";
import { Api } from "@/api/config/Api";
import { StorageUrl } from "@/utils/BaseUrl";

const getAllProductPageData = async (id) => {
  const response = await Api.getAllProductPageData(id);

  return response.data.data.product;
};

const Page = async ({ params }) => {
  const categoryName = params.products;
  const productData = await getAllProductPageData(categoryName);

  console.log("params::", params);

  return (
    <div>
      <div className="relative h-screen">
        

        <div className="absolute text-center">
          <header className="  text-3xl italic text-amber-950  flex justify-center ">
            Casual Dining
          </header>
          <h1 className="  italic text-2xl text-amber-950  ">
            {productData.length} products :
          </h1>
        </div>

        <div className=" absolute grid grid-cols-5 gap-3  max-md:grid italic text-1xl text-amber-950  w-full pt-21">
          {productData.map((item, index) => (
            <Link href={`/shop/product/${item._id}`} key={index}>
              <Card
                productName={item.name}
                productDescription={item.description}
                price={item.price}
                image={StorageUrl+item.image}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
