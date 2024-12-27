/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react";
import Slider from "react-slick";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { IoMdStar } from "react-icons/io";

export default function Trending({Resturantslist,Searchvalue,setlistdetails}){


  
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
        <>
    <div className=" text-center lg:text-left text-3xl font-bold ps-7  ">The latest trends</div>    <br />
  <div className=" flex  flex-wrap justify-center gap-10  p-6.5"> 
  {Resturantslist.map((value, index) => (
   <Link to={'detailspage'}
   onClick={() => {
    setlistdetails((prevlist) => ({
      ...prevlist, // Spread the previous state
      ...value     // Add or update the `value` property
    }));
  
  }}
   key={index}>
   <div key={index} className=""> {/* Add margin between slides */}
    <Card className="w-[21rem]  border-none shadow-lg  ">
      {/* Header Section */}
      <CardHeader className="relative p-0 ">
    


      <Slider {...subsettings} className=" p-0 m-0 box-border cardslick-dots  rounded-xl  overflow-hidden" >
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
      <CardFooter className="flex items-center gap-2">
        {/* Rating Stars */}
        <div className="flex gap-1 ">
    {Array(5)
     .fill()
     .map((_, i) => (
    
       <IoMdStar key={i} className=" w-5 h-5 rounded-[2px]  text-white"  style={{
        background:
          value.Rating - 1>= i
            ? '#E8A641' // Fully filled
            : value.Rating - i > 0
            ? `linear-gradient(to right, #E8A641 ${Math.round((value.Rating - i) * 100)}%, #9F9F9F ${Math.round(100-(value.Rating - i) * 100)}%)`
            : '#9F9F9F', // Empty
      }}/>
     ))}
        </div>
        <div className="font-bold text-[medium] ">
       {value.Rating}  <span className="text-gray-500 text-sm">{value.Reviews}</span>
        </div>
      </CardFooter>
    </Card>
    </div></Link> 
  ))} 

  <center className=" text-2xl font-bold "><p>Discover more cool restaurants</p> 
<Button className='bg-[#1677BD] hover:opacity-60 hover:bg-[#1677BD] mt-2 rounded-full px-10 '>Show More</Button>



  </center>
  </div>
        
        
        
        
        
        
        
        
        
        </>
    );
}