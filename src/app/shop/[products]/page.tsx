import Card from '@/Components/Card'
import React from 'react'
import burger from "../../../../public/images/delis.jpg"
import biriyani from "../../../../public/images/fastcsl.jpg"
import delis from "../../../../public/images/delis (2).jpg"
import buffets from "../../../../public/images/buffets (3).jpg"
import Link from 'next/link'


const productData =[
    {
        productName:"Casual Dining",
              productDescription:"hello",
              price:700,
              image:burger,

    },
    
       { productName:"fast casual",
              productDescription:"hello",
              price:700,
              image:biriyani,

    },
    {
        productName:"delis",
              productDescription:"hello",
              price:700,
              image:delis,

    },
    {image:buffets,
        productName:"buffets",
              productDescription:"hello",
              price:700,

    }
]
const page = () => {
  return (
    <div className='bg-amber-700/20'>
        <header className=' flex justify-center items-center text-xl font-bold text-amber-950/70 pt-5 '>Casual Dining</header>
        <h1 className='font-medium text-2xl text-amber-950/60 p-1 w-[150px] bg-amber-800/20 '>  {productData.length} products :</h1>

   <div className="grid grid-cols-4 gap-3 p-5 max-md:grid font-mono text-1xl text-amber-950/70">
    
    {productData.map((item,index) => (
   <Link href={`/shop/product/${item.productName}`} key={index}>
      <Card 
      
      productName={item.productName}
       productDescription={item.productDescription}
        price={item.price}
         image={item.image}/>
   </Link>
    ))}
        
    
    
   </div>

    </div>
  )
}

export default page