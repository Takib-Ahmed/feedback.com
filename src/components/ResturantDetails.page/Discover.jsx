/* eslint-disable react/prop-types */
import Slider from "react-slick";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { useState } from "react";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { IoMdStar } from "react-icons/io";

export default function Discover({setlistdetails}){
    const [Resturantslist] = useState([{
        coverimage:'/Trendingcards/Rectangle 22 (1).png',
        images:['/Trendingcards/Rectangle 22 (1).png','/Trendingcards/Rectangle 22 (10).png','/Trendingcards/Rectangle 22 (11).png'],
        Name:'Bottega',
        description:'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
        Rating:' 4.8',
        reviews:'(34 reviews)'
      
        
      },
      {
        coverimage:'/Trendingcards/Rectangle 22 (2).png',
        images:['/Trendingcards/Rectangle 22 (2).png','/Trendingcards/Rectangle 22 (9).png','/Trendingcards/Rectangle 22 (12).png'],
        Name:'Bottega',
        description:'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
        Rating:' 5.0',
        reviews:'(253 reviews)'
      
        
      },{
        coverimage:'/Trendingcards/Rectangle 22 (3).png',
        images:['/Trendingcards/Rectangle 22 (3).png','/Trendingcards/Rectangle 22 (8).png','/Trendingcards/Rectangle 22 (7).png'],
        Name:'Bottega',
        description:'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
        Rating:' 3.5',
        reviews:'(87 reviews)'
      
        
      }
     ])
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
        const navigate = useNavigate();
    return (
        <>
        <div className=" grid lg:mx-32 ">
            <div className="title text-3xl font-bold p-10  text-center lg:text-left">Also Discover...</div>
            <div className="flex flex-wrap gap-20 justify-center">

            {Resturantslist.map((value, index) => (
              <Link hrefLang="" key={index}     onClick={() => {
                navigate('./Detailspage.jsx')
                setlistdetails((prevlist) => ({
                  ...prevlist, // Spread the previous state
                  ...value     // Add or update the `value` property
                }));
              
              }}>
             <a href="top">   <div key={index} className=" bg-[#F8F8F8]"> {/* Add margin between slides */}
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
      <CardFooter className="flex items-center justify-between">
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
        <span className="text-sm font-bold">
       {value.Rating} <span className="text-gray-500">{value.reviews}</span>
        </span>
      </CardFooter>
    </Card>
    </div></a></Link>
    
  ))} 
            </div>
            
        
        </div>
        </>
    );
}