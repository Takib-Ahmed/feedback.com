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
      className='absolute top-1/2  right-0 transform -translate-y-1/2  p-2 rounded-full  z-10 next '
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
      className='absolute top-1/2 left-0  transform -translate-y-1/2  p-2 rounded-full  z-10 prev'
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
        className=" hover:bg-white transition-all duration-300 h-3 w-3  bg-gray-400 rounded-full "
        style={{ cursor: "pointer" }}
      >
        {/* Optional: Add index or other content */}
      </div>
    ),
    appendDots: (dots) => (
    <center className="   ">  <div className="   Dots absolute bottom-0 w-full  right-[65%] sm:right-[53%] translate-x-1/2    z-50 items-center translate-y-[-25px]">
    <center className="flex justify-center gap-0  pt-10     ">{dots}</center>
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
        <ul className="flex justify-center gap-0  translate-y-[-20px]">{dots}</ul>
      </div>
    ),

 
  };
  return (
<div className="  bg-[#1677BD]   mx-6 lg:mx-9  rounded-xl relative  items-center overflow-hidden border-none "> 
   <br /><br />
<center  className="  text-white text-2xl font-bold md:font-normal sm:text-3xl md:text-4xl    absolute  text-center    px-10 ">Find the best restaurant ratings below</center><br className=" sm:hidden lg:block" />
  <Slider {...settings} className=" Bestrestuarants  lg:p-10   py-16  mt-4 px-10     ">



   {Resturantslist.map((value, index) => (
   <Link key={index} to={'detailspage'}    onClick={() => {
    setlistdetails((prevlist) => ({
      ...prevlist, // Spread the previous state
      ...value     // Add or update the `value` property
    }));
  
  }}>
  {/* Add margin between slides */}
    <div key={index} className=" bg-white      border-none shadow-lg   rounded-xl  ">
      {/* Header Section */}
      <div className="relative p-0  ">
      <Slider {...subsettings} className="coverimages p-0 m-0 box-border rounded-t-lg rounded-xl  overflow-hidden border-none " >

{value.images.map((srcs,key)=>(
  <img key={key}
          src={srcs} // Replace with your image URL
          alt="Food Display"
          className="w-full h-60 object-cover   bg-transparent"
        />
))}
      
        
      </Slider>
        {/* Navigation Dots */}
       
      </div> 

 <div className="  p-4 py-2">
       {/* Card Content */}
       <div>
        <div  className='mb-2.5 text-2xl font-semibold' >{value.Name}</div>
        <div>
      {value.description}
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-between pt-4">
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
      </div>
 </div>
    </div>
   </Link>
  ))} 
  </Slider>
  
  
  
  </div>
   



 
  )
}
