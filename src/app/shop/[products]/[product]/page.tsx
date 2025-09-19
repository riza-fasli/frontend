import React from "react";


import Product from "./_component/Product";

const Page = async ({ params }: {params: { product: string}}) => {
  const productId = params.product;
  const res = await fetch("https://dummyjson.com/products/" +productId);
  const product = await res.json()
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
