import React from "react";


import Product from "./_component/Product";
import { Api } from "@/api/config/Api";

const getOneProductPageData = async (id : string) => {
  const response = await Api.getOneProductPageData(id);
console.log("responseddddd::",response)
  
  return response.data.data.product[0];
};


const Page = async ({ params }: {params: { product: string}}) => {
  const productId = params.product;
  const product = await getOneProductPageData (productId);
  console.log("product::",product)
  // const product = {
  //   id: "1",
  //   image: burger,
  //   productname: "Casual Dining",
  //   price: 24990,
  //   productdescription:
  //     "This dish typically spices and herbs, and then grilled, pan-fried, roasted until cooke They are frequently served  or a main course as seen in the image.",
  // };

  return (
    <div>
      <Product product={product} />
    </div>
  );
};

export default Page;
