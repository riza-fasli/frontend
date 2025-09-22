import React from "react";


import Product from "./_component/Product";
import { Api } from "@/api/config/Api";


const getOneProductPageData = async (id) => {
  const response = await Api.getOneProductPageData(id);
  console.log(response.data.data)
  return response.data.data.product[0]
};

const product = async ({ params }: {params: { product: string}}) => {
  const productId = params.product;
  console.log("producct:::",productId)
  const productone = await getOneProductPageData +productId;
  console.log("productttts::::",productone)
  
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
      <Product product={productone} />
    </div>
  );
};

export default product;
