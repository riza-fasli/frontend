"use client";
import Image from "next/image";
import React, { useState } from "react";
import purple1 from "../../../public/images/hmepg.jpg";
import purple2 from "../../../public/images/hmepgu.jpg";
import purple3 from "../../../public/images/hmepgee.jpg";
import Arrowleft from "@/icons/Arrowleft";
import Arrowright from "@/icons/Arrowright";
import { StorageUrl } from "@/utils/BaseUrl";

// const gallery = [
//   { image: purple1,
//      heading: "Delicious & Mouth Watering Test.",
//      subheading: "Let’s Make Your Next Meal Unforgettable",
//    },
//    { image: purple2 ,
//      heading: "Fresh Ingredients Every Time.",
//     subheading: "We Care About Your Health and Taste",
//    },
//    { image: purple3, 
//     heading: "The Perfect Blend of Flavors.",
//     subheading: "Enjoy Food Made With Love",
    
    
//    }];
const Carousel = ({gallery}) => {
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
    <div className="relative h-screen mx-auto overflow-hidden rounded-lg shadow-lg">
      AnimatePresence
      <Image 
        src={StorageUrl+gallery.at(activeImage)!.image}
        // src={gallery.at(0)!.image}
        fill
        className="object-cover"
        alt="purple"
      />
      <div className=" absolute h-screen flex justify-center items-center flex-col w-full">
        <h1 className="italic text-5xl text-amber-50/70">{gallery.at(activeImage)?.name}</h1>
        <h2 className="italic text-3xl text-amber-50/70">{gallery.at(activeImage)?.description}</h2>
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
