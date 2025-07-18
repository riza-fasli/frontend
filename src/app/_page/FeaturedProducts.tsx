import React from "react";
// import Image from "next/image";
import purple from "../../../public/images/prwn.jpg";
import burger from "../../../public/images/noodls.jpg";
import biriyani from "../../../public/images/str frd.jpg"
import chicken from "../../../public/images/lhsuni.jpg"
import meat from "../../../public/images/fish.jpg"
import prawn from "../../../public/images/bryni.jpg"
import mutton from "../../../public/images/malaitikka.jpg"
import grill from "../../../public/images/tandoorichickn.jpg"
import Card from "@/Components/Card";

const featuredProductsData =[
  {
    image:purple,
              productName:"Prawn skewer",
              productDescription:"This dish typically consists of prawns or shrimps threaded onto skewers, often marinated in spices and herbs, and then grilled, pan-fried, or roasted until cooked through. They are frequently served as an appetizer or a main course, often accompanied by a dipping sauce or a squeeze of fresh lemon juice, as seen in the image.",
              price:700,

  },
  {
    image:burger,
              productName:"Chowmein",
              productDescription:"This dish typically consists of prawns or shrimps threaded onto skewers, often marinated in spices and herbs, and then grilled, pan-fried, or roasted until cooked through. They are frequently served as an appetizer or a main course, often accompanied by a dipping sauce or a squeeze of fresh lemon juice, as seen in the image.",
              price:850,

  },
  {
    image:biriyani,
              productName:"Stir Fried Chicken",
              productDescription:"This dish typically consists of prawns or shrimps threaded onto skewers, often marinated in spices and herbs, and then grilled, pan-fried, or roasted until cooked through. They are frequently served as an appetizer or a main course, often accompanied by a dipping sauce or a squeeze of fresh lemon juice, as seen in the image.",
              price:750,

  },
  {
    image:chicken,
              productName:"Dahi Lehsuni Tikka",
              productDescription:"This dish typically consists of prawns or shrimps threaded onto skewers, often marinated in spices and herbs, and then grilled, pan-fried, or roasted until cooked through. They are frequently served as an appetizer or a main course, often accompanied by a dipping sauce or a squeeze of fresh lemon juice, as seen in the image.",
              price:950,

  },
  {
    image:meat,
              productName:"Grilled Fish",
              productDescription:"This dish typically consists of prawns or shrimps threaded onto skewers, often marinated in spices and herbs, and then grilled, pan-fried, or roasted until cooked through. They are frequently served as an appetizer or a main course, often accompanied by a dipping sauce or a squeeze of fresh lemon juice, as seen in the image.",
              price:780,

  },
  {
    image:prawn,
              productName:"Mutton Biriyani",
              productDescription:"This dish typically consists of prawns or shrimps threaded onto skewers, often marinated in spices and herbs, and then grilled, pan-fried, or roasted until cooked through. They are frequently served as an appetizer or a main course, often accompanied by a dipping sauce or a squeeze of fresh lemon juice, as seen in the image.",
              price:900,

  },
  {
    image:mutton,
              productName:"Chicken Malai Tikka",
              productDescription:"This dish typically consists of prawns or shrimps threaded onto skewers, often marinated in spices and herbs, and then grilled, pan-fried, or roasted until cooked through. They are frequently served as an appetizer or a main course, often accompanied by a dipping sauce or a squeeze of fresh lemon juice, as seen in the image.",
              price:800,

  },
  {
    image:grill,
              productName:"Tandoori Chicken",
              productDescription:"This dish typically consists of prawns or shrimps threaded onto skewers, often marinated in spices and herbs, and then grilled, pan-fried, or roasted until cooked through. They are frequently served as an appetizer or a main course, often accompanied by a dipping sauce or a squeeze of fresh lemon juice, as seen in the image.",
              price:700,

  },
]



const FeaturedProducts = () => {
  return (
    <div className=" pb-5 bg-amber-950 text-amber-50 ">
    <h1 className="font-mono text-5xl flex justify-center text-amber-50 p-7 bg-amber-950">
          Featured Products
        </h1>


       <div className="grid grid-cols-4 gap-3 p-5 max-md:grid">

        {featuredProductsData.map((item,index) => (<Card
        key={index}
              image={item.image}
              productName={item.productName}
              productDescription={item.productDescription} 
              price={item.price}
            />))}
            
            
       </div>
    </div>
    
  );
};

export default FeaturedProducts;
