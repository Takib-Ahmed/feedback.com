/* eslint-disable react/prop-types */
import { Button } from "../ui/button";
import { BsSortUp,BsSortDown } from "react-icons/bs";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Slider from "react-slick";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Searchrestults({Resturantslist,Filtervalue,setlistdetails}){
  
      
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

const [Sort,setsort] = useState(false)

    return (
        <div className=" Searchresultpage flex flex-wrap lg:flex-nowrap   justify-center lg:justify-normal lg:ps-32 my-10 mt-0">
   <div>
   <div className=" text-start py-10 pb-0">
            <h5 className=" justify-center md:justify-normal flex  ">Home / All restaurants</h5>
            <div className=" justify-center md:justify-normal flex gap-20 py-2"><h1 className=" text-2xl sm:text-3xl font-bold">best restaurants in singapore</h1><Button onClick={()=>{setsort((prev)=>!prev)}} className=' flex gap-2 bg-transparent border-2 border-[#918f8f] rounded-full text-[#918f8f] hover:border-inherit hover:text-white '>{Sort ? <BsSortUp/>:<BsSortDown/>}Sort</Button></div>
        </div>
        
<div className="flex">


<div className=" flex flex-col ">
  { Resturantslist.filter((Resturants) => 
 !Filtervalue || Resturants.Name.toLowerCase().includes(Filtervalue.trim().toLowerCase())
).map((value, index) => (
   

  <Link to={'detailspage'} key={index} onClick={() => {
    
    setlistdetails((prevlist) => ({
      ...prevlist, // Spread the previous state
      ...value     // Add or update the `value` property
    }));
  
  }}> <div key={index} className="  border-b-[#DCDCDC] border-b-2 py-10 "> {/* Add margin between slides */}
  <div className="   lg:w-[44rem] border-none  flex flex-wrap justify-center lg:justify-normal gap-4 ">
    {/* Header Section */}
    <div className="relative p-0 ">
  




<img 
        src={value.coverimage} // Replace with your image URL
        alt="Food Display"
        className="  coverimage w-full lg:w-52   h-full lg:h-48 object-cover rounded-t-lg rounded-xl   bg-transparent"
      />

    

    



      {/* Navigation Dots */}
     
    </div> 

    {/* Card Content */}

<div className=" flex flex-col  gap-7 ">
  <div className="grid gap-1 ">
  <div  className=' font-bold text-xl'>{value.Name}</div>
      <div className=" w-80">
    {value.description}
      </div>

  </div>

      <div className="flex items-center ">
      {/* Rating Stars */}
      <div className="flex gap-1 text-yellow-500">
        {Array(5)
          .fill()
          .map((_, i) => (
            <img src="/star.png" alt="" key={i}  className=" w-5 h-5"/>
          ))}
      </div>
      <span className="text-sm font-bold">
     {value.Rating} <span className="text-gray-500">{value.reviews}</span>
      </span>
    </div>
    </div>

    {/* Footer Section */}


  </div>
  </div></Link>
  ))} 
  </div>



</div>
   </div>
<div className="map h-[80rem] flex justify-end  ">
  <img src="/public/Searchrestult/Group 178.png" alt="" className=" w-full " />
</div>
        
        </div>
    );
}