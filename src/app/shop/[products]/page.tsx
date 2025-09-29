import Card from "@/Components/Card";
import React from "react";

import Link from "next/link";

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
          <header className="  text-3xl italic text-gray-500/40  flex justify-center ">
            Casual Dining
          </header>
          <h1 className="  italic text-2xl text-gray-500/40  ">
            {productData.length} products :
          </h1>
        </div>

        <h1 className="  italic text-2xl text-gray-500/40"></h1>
        <div className=" absolute grid grid-cols-5 gap-3  max-md:grid italic text-1xl text-gray-500/40  w-full pt-21">
          {productData.map(
            (
              item: {
                name: string;
                description: string;
                price: number;
                _id: string;
                image: string;
              },
              index: number
            ) => (
              <Link href={`/shop/product/${item._id}`} key={index}>
                <Card
                  productName={item.name}
                  productDescription={item.description}
                  price={item.price}
                  image={StorageUrl + item.image}
                />
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
