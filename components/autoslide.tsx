import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import image1 from "@/images/believeyourself.jpg";
import image2 from "@/images/creative.jpg";
import image3 from "@/images/dontracism.jpg";
import image4 from "@/images/dontrude.jpg";
import image5 from "@/images/wearefriend.jpg";


const Slideshow = () => {
  const images = [image1, image2, image3, image4, image5];

  const zoomInProperties = {
    scale: 1,
    duration: 5000,
    transitionDuration: 300,
    infinite: true,
    prevArrow: (
      <div className="ml-10 top-40 md:top-72">
        <ArrowLeftIcon className="h-8 w-8 text-gray-500 cursor-pointer" />
      </div>
    ),
    nextArrow: (
      <div className="mr-10 top-40 md:top-72">
        <ArrowRightIcon className="h-8 w-8 text-gray-500 cursor-pointer" />
      </div>
    ),
  };
  return (
    <div className="w-full h-full">
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div
            key={index}
            className="flex justify-center md:items-center items-start w-full h-full relative"
          >
            <img className="w-full flex justify-center items-center h-full" src={each.src} />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
