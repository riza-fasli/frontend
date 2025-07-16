import Card from '@/Components/Card'
import React from 'react'
import burger from "../../../../public/images/delis.jpg"
import biriyani from "../../../../public/images/buffets (2).jpg"
import delis from "../../../../public/images/fast casual.jpg"
import buffets from "../../../../public/images/fast casual2.jpg"


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
    <div>
        <header className=' flex justify-center items-center text-4xl font-semibold text-amber-950 '>Casual Dining</header>

   <div className="grid grid-cols-4 gap-3 p-5 max-md:grid font-mono text-1xl">
    
    {productData.map((item,index) => (
    <Card key={index}
    
    productName={item.productName}
     productDescription={item.productDescription}
      price={item.price}
       image={item.image}/>
    ))}
        
    
    
   </div>

    </div>
  )
}

export default page