import Image from 'next/image'
import React from 'react'
import purple from "../../../public/images/purple-aesthetic-laptop-sdtqou5vmxeg6iqq.jpg"
import Arrowleft from '@/icons/Arrowleft'
import Arrowright from '@/icons/Arrowright'
const Carousel = () => {
  return (
    <div className='relative h-screen'>
      <Image src={purple} fill className='object-cover' alt="purple"/>
      <Arrowleft className=" absolute left-0 top-1/3 size-15"/>
      <Arrowright className="absolute right-0 top-1/3 size-15"/> 
    </div>
  )
}

export default Carousel