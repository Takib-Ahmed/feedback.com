/* eslint-disable react/prop-types */

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react";
import { Link } from "react-router-dom";

export function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className='absolute top-1/2 right-0 transform -translate-y-1/2  p-2 rounded-full  z-10 '
      onClick={onClick}
    >
<img src="/Prev&next/next.png" alt=""  className=" w-16"/>
    </button>
  );
}

export function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className='absolute top-1/2 left-4 transform -translate-y-1/2  p-2 rounded-full  z-10 '
      onClick={onClick}
    >
     <img src='/Prev&next/prev.png' alt=""  className=" w-16"/>
    </button>
  );
}





export function CarouselSize({setlistdetails}) {

const [Resturantslist] = useState([{
  coverimage:'/Findthebest/Rectangle 22 (1).png',
  images:['/Findthebest/Rectangle 22 (1).png','/Findthebest/Rectangle 22 (2).png','/Findthebest/Rectangle 22 (3).png'],
  Name:'Bottega',
  description:'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
  Rating:' 5.0',
  Reviews:'(876 reviews)'

  
},
{
  coverimage:'/Findthebest/Rectangle 22 (2).png',
  images:['/Findthebest/Rectangle 22 (2).png','/Findthebest/Rectangle 22 (3).png','/Findthebest/Rectangle 22 (1).png'],
  Name:'Bottega',
  description:'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
  Rating:' 5.0',
  Reviews:'(876 reviews)'

  
},{
  coverimage:'/Findthebest/Rectangle 22 (3).png',
  images:['/Findthebest/Rectangle 22 (3).png','/Findthebest/Rectangle 22 (2).png','/Findthebest/Rectangle 22 (1).png'],
  Name:'Bottega',
  description:'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
  Rating:' 5.0',
  Reviews:'(876 reviews)'

  
}
,{
  coverimage:'/Findthebest/Rectangle 22 (4).png',
  images:['/Findthebest/Rectangle 22 (4).png','/Findthebest/Rectangle 22 (3).png','/Findthebest/Rectangle 22 (2).png'],
  Name:'Bottega',
  description:'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
  Rating:' 5.0',
  Reviews:'(876 reviews)'

  
},{
  coverimage:'/Findthebest/Rectangle 22 (1).png',
  images:['/Findthebest/Rectangle 22 (1).png','/Findthebest/Rectangle 22 (2).png','/Findthebest/Rectangle 22 (4).png'],
  Name:'Bottega',
  description:'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
  Rating:' 5.0',
  Reviews:'(876 reviews)'

  
},{
  coverimage:'/Findthebest/Rectangle 22 (2).png',
  images:['/Findthebest/Rectangle 22 (2).png','/Findthebest/Rectangle 22 (3).png','/Findthebest/Rectangle 22 (1).png'],
  Name:'Bottega',
  description:'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
  Rating:' 5.0',
  Reviews:'(876 reviews)'

  
}])


  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    responsive: [  {
      breakpoint: 1556,
      settings: {
        slidesToShow: 4,
      },
    },

      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1086,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 710,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i) => (
      <div
        className=" hover:bg-white transition-all duration-300 h-3 w-3  bg-gray-400 rounded-full"
        style={{ cursor: "pointer" }}
      >
        {/* Optional: Add index or other content */}
      </div>
    ),
    appendDots: (dots) => (
    <center className="  justify-center">  <div className=" p-1  z-50  grid items-center justify-center">
    <ul className="flex justify-center gap-0  pt-10 translate-y-[-25px] items-center  lg:translate-x-[-1.5rem] dots md:translate-x-[-2rem] ">{dots}</ul>
  </div></center>
    ),
  };
  var subsettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,   
    arrows: false,
    customPaging: (i) => (
      <div
        className=" bg-gray-400 transition-all duration-300 h-2 w-2 hover:bg-white rounded-full"
        style={{ cursor: "pointer" }}
      >
        {/* Optional: Add index or other content */}
      </div>
    ),
    appendDots: (dots) => (
      <div className="p-1">
        <ul className="flex justify-center gap-0 mx-10  translate-y-[-20px]">{dots}</ul>
      </div>
    ),

 
  };
  return (
<div className="  bg-[#1677BD] m-9  rounded-xl relative  items-center overflow-hidden border-none slickslide"> 
   <br /><br />
<center  className=" text-white text-2xl font-bold md:font-normal sm:text-3xl md:text-4xl   md:ps-16 absolute  text-center  lg:px-5  px-10 ">Find the best restaurant ratings below</center><br />
  <Slider {...settings} className="   lg:p-10   py-16  mt-4  Slider     ">



   {Resturantslist.map((value, index) => (
   <Link key={index} to={'detailspage'}    onClick={() => {
    setlistdetails((prevlist) => ({
      ...prevlist, // Spread the previous state
      ...value     // Add or update the `value` property
    }));
  
  }}>
    <div key={index} className="       "> {/* Add margin between slides */}
    <Card className="w-[20rem]    border-none shadow-lg  lg:mx-5 ">
      {/* Header Section */}
      <CardHeader className="relative p-0 ">
      <Slider {...subsettings} className=" p-0 m-0 box-border cardslick-dots rounded-t-lg rounded-xl  overflow-hidden border-none" >

{value.images.map((srcs,key)=>(
  <img key={key}
          src={srcs} // Replace with your image URL
          alt="Food Display"
          className="w-full h-56 object-cover rounded-t-lg rounded-xl   bg-transparent"
        />
))}
      
        
      </Slider>
        {/* Navigation Dots */}
       
      </CardHeader> <br />

      {/* Card Content */}
      <CardContent>
        <CardTitle  className='mb-2.5'>{value.Name}</CardTitle>
        <CardDescription>
      {value.description}
        </CardDescription>
      </CardContent>

      {/* Footer Section */}
      <CardFooter className="flex items-center justify-between">
        {/* Rating Stars */}
        <div className="flex gap-1 text-yellow-500">
          {Array(5)
            .fill()
            .map((_, i) => (
              <img src="/star.png" alt="" key={i}  className=" w-5 h-5"/>
            ))}
        </div>
        <div className="text-sm font-bold">
       {value.Rating} <span className="text-gray-500">{value.Reviews}</span>
        </div>
      </CardFooter>
    </Card>
    </div></Link>
  ))} 
  </Slider>
  
  
  
  </div>
   



 
  )
}
