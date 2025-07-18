"use client";
import Image from 'next/image'
import image1 from "../../../public/images/delis (2).jpg"
import image2 from "../../../public/images/buffets (3).jpg"
import image3 from "../../../public/images/casual dining.jpg"
import React from 'react'
import { useCart } from 'react-use-cart';
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
  const{items, isEmpty, updateItemQuantity, removeItem} = useCart();
  console.log("items::",items)
  if (isEmpty) return <p>Your cart is empty</p>;
  return (
    <div className='bg-amber-950/20  grid grid-cols-3 '>
       <table className='w-full col-span-2'>
        <thead>
        
            <tr className='text-amber-950/50'>
            <th></th>
                <th className='text-left'>PRODUCT</th>
                <th className='text-left'>PRICE</th>
                <th className='text-left'>QUANTITY</th>
                <th className='text-left'>SUBTOTAL</th>
                <th></th>
                
            </tr>
        </thead>
        <tbody>
          {items.map((item,index) => (
        <tr key={index} className='font-semibold text-amber-950/50'>
            <td>
              <div className='relative size-24 mt-2'>
                <Image src={item.image} fill className="object-cover" alt=''/>
              </div>
            </td>
                <td>{item.productname}</td>
                
                <td>{item.price}</td>
                <td>
                <div className='flex gap-4' >
                <button onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)} className='bg-amber-800/20 text-amber-950 rounded-sm p-2 '>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)} className='bg-amber-800/20 text-amber-950 rounded-sm p-1'>+</button>
                </div></td>
                <td>{item.itemTotal}</td>
                <td>
                  <button onClick={() => removeItem(item.id)}className='bg-amber-950/20 text-amber-950  p-2 mt-4'>delete</button></td>
            </tr>
          ))}
           
        </tbody>
       </table>
       <div className='text-amber-950/60 font-semibold col-span-1 bg-amber-50'>
        <header className='font-bold'>CART TOTAL</header>
        <h1 className='mt-2'>Subtotal: Rs.9500.00</h1>
        <h1>Total:  Rs.10000.00</h1>
        <button className='bg-amber-950/20 text-amber-950 rounded-2xl p-2 mt-4'>Proceed to Check Out</button>
       </div>

    </div>
  )
}

export default Page