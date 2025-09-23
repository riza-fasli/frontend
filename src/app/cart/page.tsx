"use client";
import Image from "next/image";
import image4 from "../../../public/images/whtlyt.jpg";
import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import Link from "next/link";
import { StorageUrl } from "@/utils/BaseUrl";
// const products =[
//   {id:1,
//   image:image1,
//   name: "delis",
//   price: 900,
//   quantity:1,
//   subtotal:6700
//   },

//   {id:1,
//   image:image2,
//   name: "buffets",
//   price: 700,
//   quantity:1,
//   subtotal:8000
//   },

//   {id:1,
//   image:image3,
//   name: "casual dining",
//   price: 1000,
//   quantity:1,
//   subtotal:9500
//   },

// ]
const Page = () => {
  const { items, isEmpty, updateItemQuantity, removeItem } = useCart();
  console.log("items::", items);
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   if (!isClient) {
  //     setIsClient(true);
  //   }
  // }, [isClient]);
  // if (isClient) {
  //   return null;
  // }

  if (isEmpty) return <p className="italic">Your cart is empty</p>;
  return (
    <div className=" grid grid-cols-3 pt-5 relative h-screen">
      <Image src={image4} fill className="object-cover" alt="image2" />

      <table className=" col-span-2 z-5 ">
        <thead>
          <tr className="text-amber-950 ">
            <th></th>
            <th className="text-left">PRODUCT</th>
            <th className="text-left">PRICE</th>
            <th className="text-left">QUANTITY</th>
            <th className="text-left">SUBTOTAL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="italic text-1xl  text-amber-950">
              <td>
                <div className="relative size-40 mb-20 border-2 border-amber-950">
                  <Image
                    src={StorageUrl + item.image}
                    fill
                    className="object-cover"
                    alt=""
                  />
                </div>
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>

              <td>{item.quantity}</td>
              <td>
                <div className="flex gap3  ">
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, (item.quantity ?? 0) - 1)
                    }
                    className="hover:bg-[#A86523] bg-yellow-700/40  text-amber-950 rounded-sm p-2 "
                  >
                    -
                  </button>
                  <p>{item.quantity }</p>
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, (item.quantity ?? 0) + 1)
                    }
                    className="hover:bg-[#A86523] bg-yellow-700/40  text-amber-950 rounded-sm p-1 "
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="">{item.itemTotal?.toFixed(2)}</td>
              <td>
                <button
                  onClick={() => removeItem(item.id)}
                  className="hover:bg-[#A86523] bg-yellow-700/40  text-amber-950  rounded-sm  p-2 "
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-amber-950 font-semibold col-span-1 p-5 shadow-2xl  z-10 italic  ">
        <header className="font-bold text-2xl">Cart Total</header>
        <h1 className="mt-4">Subtotal: Rs.9500.00</h1>
        <h1 className="mt-4 mb-10">Total: Rs.10000.00</h1>
        <Link
          href={"/checkout"}
          className="hover:bg-[#A86523] bg-yellow-700/40  text-amber-950 rounded-sm  p-2 "
        >
          Proceed to Check Out
        </Link>
      </div>
    </div>
  );
};

export default Page;
