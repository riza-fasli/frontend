import Card from "@/Components/Card";
import React from "react";
import image2 from "../../../../public/images/whtlyt.jpg";
import Link from "next/link";
import Image from "next/image";
import { Api } from "@/api/config/Api";
import { StorageUrl } from "@/utils/BaseUrl";


const getAllProductPageData = async (id) => {
  const response = await Api.getAllProductPageData(id);
  console.log(response.data.data)
  return response.data.data.products[0]
};
// const productData =[
//     {
//         productName:"Casual Dining",
//               productDescription:" grilled, pan-fried, or roasted until cooked through. often accompanied by a dipping sauce or a squeeze of fresh lemon juice, as seen in the image.",
//               price:700,
//               image:burger,

//     },

//        { productName:"Fast Casual",
//               productDescription:"This dish typically spices and herbs, and then grilled, pan-fried, roasted until cooke They served as an appetizer or a main course as seen in the image.",
//               price:700,
//               image:biriyani,

//     },
//     {
//         productName:"Delis",
//               productDescription:"spices and herbs, and then grilled, roasted until cooked often accompanied by a dipping sauce or a squeeze of fresh lemon juice, as seen in the image.",
//               price:700,
//               image:delis,

//     },
//     {image:buffets,
//         productName:"Buffets",
//               productDescription:"This dish typically spices and herbs, and then grilled, pan-fried, roasted until cooke They are frequently served  or a main course as seen in the image.",
//               price:700,

//     }
// ]
const products = async ({ params }: {params: { products: string}})  => {
  console.log("params::", products);
  const productId = params.products;


const productData = await getAllProductPageData +productId;
  console.log("productttts::::",productData)

  // console.log("allproducts::",allproducts)
  // const productData = allproducts.products;

  // console.log("product:::",productData)

  return (
    <div>
      <div className="relative h-screen">
        <Image src={image2} fill className="object-cover" alt="image2" />

        <div className="absolute text-center">
          <header className="  text-3xl italic text-amber-950  flex justify-center ">
            Casual Dining
          </header>
          <h1 className="  italic text-2xl text-amber-950  ">
            {" "}
            {productData.length} products :
          </h1>
        </div>

        <div className=" absolute grid grid-cols-5 gap-3  max-md:grid italic text-1xl text-amber-950  w-full pt-21">
          {productData.map((item:string, index:string) => (
            <Link href={`/shop/product/${item._id}`} key={index}>
              <Card
                productName={item.name}
                productDescription={item.description}
                price={item.price}
                image={StorageUrl + item.image}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default products;
