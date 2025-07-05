import Image from "next/image";
import React from 'react'
import purple from "../../../public/images/pexels-sylwester-ficek-154797634-32116402.jpg"

const Category = () => {
  return (
    <div>
    <h1 className='font-bold text-5xl flex justify-center text-amber-800'>FOOD</h1>
     
    <div className="relative h-[500px]">
    <Image fill src={purple} className="object-cover" alt="purple" />
    </div>

    <div className="relative h-[500px]">
    <Image fill src={purple} className="object-cover" alt="purple" />
    </div>

    <div className="relative h-[500px]">
    <Image fill src={purple} className="object-cover" alt="purple" />
    </div>

    <div className="relative h-[500px]">
    <Image fill src={purple} className="object-cover" alt="purple" />
    </div>
     
    
  </div>

  );
};

export default Category