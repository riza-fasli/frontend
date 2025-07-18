"use client";
import Image from "next/image";
import React, { useState } from "react";
import purple1 from "../../../public/images/hmepg.jpg";
import purple2 from "../../../public/images/hmepgu.jpg";
import purple3 from "../../../public/images/hmepgee.jpg";
import Arrowleft from "@/icons/Arrowleft";
import Arrowright from "@/icons/Arrowright";

const gallery = [
  { image: purple1,
     heading: "Delicious & Mouth Watering Test.",
     subheading: "Let’s Make Your Next Meal Unforgettable",
   },
   { image: purple2 ,
     heading: "Delicious & Mouth Watering Test.",
     subheading: "Let’s Make Your Next Meal Unforgettable",
   },
   { image: purple3, 
    heading: "Delicious & Mouth Watering Test.",
    subheading: "Let’s Make Your Next Meal Unforgettable",
    
    
   }];
const Carousel = () => {
  const [activeImage, setactiveImage] = useState(0);

  const totalImages = gallery.length; //3

  const next = () => {
    if (activeImage == totalImages - 1) {
      setactiveImage(0);
    } else {
      setactiveImage(activeImage + 1);
    }
  };
  const previous = () => {
    if (activeImage == 0) {
      setactiveImage(totalImages - 1);
    } else {
      setactiveImage(activeImage - 1);
    }
  };

  // const previous = () => (setactiveImage = activeImage + 1);

  return (
    <div className="relative h-screen">
      <Image
        src={gallery.at(activeImage)!.image}
        // src={gallery.at(0)!.image}
        fill
        className="object-cover"
        alt="purple"
      />
      <div className=" absolute h-screen flex justify-center items-center flex-col w-full">
        <h1 className="font-bold text-5xl text-amber-50">{gallery.at(activeImage)?.heading}</h1>
        <h2 className="font-light text-3xl text-amber-50">{gallery.at(activeImage)?.subheading}</h2>
      </div>
      <div className="absolute h-screen flex items-center left-0">
        <Arrowleft onClick={previous}
          className=" size-10"
        />
      </div>
      <div className="absolute h-screen flex items-center right-0">
        <Arrowright onClick={next} className=" size-10" /></div>
    </div>
  );
};

export default Carousel;
