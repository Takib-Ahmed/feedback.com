
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { IoMdStar } from "react-icons/io";
import { NextArrow, PrevArrow } from "./Carusel";


export default function Recentsactivities(){

    const data = [
        {
          Name: "Leslie Sakho",
          location: "Canada, Toronto",
          description:
            `The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.

The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.`,
          Rating: "5.0",
          reviews: "(120 reviews)",
          date: "09/11/2023",
          images: [
            "/Recentactivities/Rectangle 24 (1).png",
            "/Recentactivities/Rectangle 26.png",
            "/Recentactivities/Rectangle 25.png",
          ],
        },
        {
          Name: "John Doe",
          location: "USA, New York",
          description:
`The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.

The lorem ipsum is, in printing.`,
          Rating: "4.5",
          reviews: "(89 reviews)",
          date: "08/10/2023",
          images: [
            "/Recentactivities/Rectangle 24 (2).png",
            "/Recentactivities/ra2.png",
            "/Recentactivities/Rectangle 25 (1).png",
          ],
        },
        {
          Name: "Maria Lopez",
          location: "Spain, Madrid",
          description:
`The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.

The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.`,
          Rating: "4.8",
          reviews: "(150 reviews)",
          date: "07/12/2023",
          images: [
            "/Recentactivities/Rectangle 24 (3).png",
            "/Recentactivities/Rectangle 25 (2).png",
            "/Recentactivities/Rectangle 26 (1).png",
          ],
        },  {
          Name: "Leslie Sakho",
          location: "Canada, Toronto",
          description:
            `The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.

The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.`,
          Rating: "5.0",
          reviews: "(120 reviews)",
          date: "09/11/2023",
          images: [
            "/Recentactivities/Rectangle 24 (1).png",
            "/Recentactivities/Rectangle 26.png",
            "/Recentactivities/Rectangle 25.png",
          ],
        },
        {
          Name: "John Doe",
          location: "USA, New York",
          description:
`The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.

The lorem ipsum is, in printing.`,
          Rating: "4.5",
          reviews: "(89 reviews)",
          date: "08/10/2023",
          images: [
            "/Recentactivities/Rectangle 24 (2).png",
            "/Recentactivities/ra2.png",
            "/Recentactivities/Rectangle 25 (1).png",
          ],
        },
        {
          Name: "Maria Lopez",
          location: "Spain, Madrid",
          description:
`The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.

The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.`,
          Rating: "4.8",
          reviews: "(150 reviews)",
          date: "07/12/2023",
          images: [
            "/Recentactivities/Rectangle 24 (3).png",
            "/Recentactivities/Rectangle 25 (2).png",
            "/Recentactivities/Rectangle 26 (1).png",
          ],
        },
      ];
    


      
      const subsettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
           nextArrow: <NextArrow  />,
            prevArrow: <PrevArrow   />,
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
            <ul className="flex justify-center gap-0  pt-10 translate-y-[-25px] items-center  lg:translate-x-[-1.5rem]  md:translate-x-[-2rem] ">{dots}</ul>
          </div></center>
            ),
            responsive: [  {
              breakpoint: 1556,
              settings: {
                slidesToShow: 3,
              },
            },
        
              {
                breakpoint: 1465,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 935,
                settings: {
                  slidesToShow: 1,
                },
              },
           
            ]
      };
    

    return (
        <>





        <div className="  Title    "><p className="px-16 py-10 text-3xl">Recents avtivities</p>
  <div className="flex  justify-center px-0  sm:px-10 sm:pe-14  md:px-12   ">
      
  <Slider
  {...subsettings}
  className=" w-full  Recents  md:p-0 m-0 box-border rounded-t-lg rounded-xl overflow-hidden border-none justify-center flex items-center gap-4" // Add gap between cards
>
  {data.map((value, index) => (
    <div
      key={index}
      className="bg-[#F8F8F8] border-none p-5 lg:pe-10 flex flex-col gap-6 rounded-lg w-full h-[30rem]  lg:h-auto overflow-hidden  md:overflow-visible "
    >
      {/* Header Section */}
      <div className="flex items-center gap-2 mb-2   ">
        <div className="rounded-full bg-white w-10 h-10 flex justify-center items-center">
          <img
            src="/Recentactivities/Vector (8).png" // Replace with your profile image URL
            alt="Profile"
            className="w-5 h-5"
          />
        </div>

        <div>
          <div className="text-xl">{value.Name}</div>
          <p className="text-sm text-gray-500">{value.location}</p>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex items-start ps-0 gap-5 mt-2">
        {/* Rating Stars */}
        <div className="flex gap-1 pt-0.5">
          {Array(5)
            .fill()
            .map((_, i) => (
              <IoMdStar
                key={i}
                className="w-5 h-5 rounded-[2px] text-white"
                style={{
                  background:
                    value.Rating - 1 >= i
                      ? "#E8A641" // Fully filled
                      : value.Rating - i > 0
                      ? `linear-gradient(to right, #E8A641 ${Math.round(
                          (value.Rating - i) * 100
                        )}%, #9F9F9F ${Math.round(
                          100 - (value.Rating - i) * 100
                        )}%)`
                      : "#9F9F9F", // Empty
                }}
              />
            ))}
        </div>
        <span className="text-sm font-bold">09/11/2023</span>
      </div>
      <div className=" mt-3 lg:h-40 lg:overflow-hidden">{value.description}</div>
      <br className="hidden md:block" />
      
      <div className="  flex  items-start ps-0 mt-5 sm:pt-0 gap-2">
        {value.images.map((photoes, i) => (
          <img
            src={photoes} // Replace with your star icon URL
            alt=""
            key={i}
            className="w-60 md:w-full"
          />
        ))}
      </div>

      <div className="px-4 py-2 ps-0">
        <button className="text-sm text-blue-500 hover:underline">
          Discover
        </button>
      </div>
    </div>
  ))}
</Slider>

   
    </div>
        
    </div>
        
        
        
        
        </>
    );
}