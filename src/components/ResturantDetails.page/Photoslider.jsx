import Slider from "react-slick";
import { useState, useRef } from "react";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";

export default function Photoslider({ Showphotos, setshowphotos }) {
  const Photos = [
    { src: "/Slider/Group 3783.png", alt: "Main photo", isMain: true },
    { src: "/Slider/Rectangle 1267.png", alt: "Photo 1" },
    { src: "/Slider/Rectangle 1269.png", alt: "Photo 2" },
    { src: "/Slider/Group 3783.png", alt: "Photo 3" },
    { src: "/Slider/Rectangle 1267.png", alt: "Photo 4" },
    { src: "/Slider/Rectangle 1269.png", alt: "Photo 5" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide
  const sliderRef = useRef(null); // Reference to the slider instance

  // Custom Previous Arrow
  const PrevArrow = ({ onClick }) => (
    <button
      className={`absolute    transform -translate-y-1/2 z-10 h-7 w-7 
        -translate-x-32
        
        
        left-1/2 space-x-2 rounded-full  font-bold  
        
        
        flex  bottom-1  items-center
        
        ${
        currentSlide === 0
          ? "bg-white opacity-50 cursor-not-allowed" // Disabled state
          : "bg-white cursor-pointer" // Active state
      } flex items-center justify-center`}
      onClick={onClick}
      disabled={currentSlide === 0}
    >
      <GrLinkPrevious />
    </button>
  );

  // Custom Next Arrow
  const NextArrow = ({ onClick }) => (
    <button
      className={`absolute    transform -translate-y-1/2 z-10 h-7 w-7   right-1/2 space-x-2 rounded-full  font-bold  
        translate-x-32
        
        flex  bottom-1  items-center ${
        currentSlide === Photos.length - 1
          ? "bg-white opacity-50 cursor-not-allowed" // Disabled state
          : "bg-white cursor-pointer" // Active state
      } flex items-center justify-center`}
      onClick={onClick}
      disabled={currentSlide === Photos.length - 1}
    >
      <GrLinkNext />
    </button>
  );

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Update currentSlide
    customPaging: (i) => (
      <div
        className={`hover:bg-white transition-all duration-300 h-3 w-3 rounded-full ${
          currentSlide === i ? "bg-blue-400" : "bg-gray-400"
        }`}
        style={{ cursor: "pointer" }}
      />
    ),
    appendDots: (dots) => (
      <center className="justify-center  mx-0.5">
        <div className="p-1 z-50 grid items-center justify-center">
          <ul className="flex justify-center gap-0 pt-10 translate-y-[-38px] items-center ">
            {dots}
          </ul>
        </div>
      </center>
    ),
  };

  // Render additional set of dots with images
  const renderAdditionalDots = () => (
    <div className="flex justify-center gap-2 mt-4">
      {Photos.map((image, i) => (
        <div
          key={i}
          className="cursor-pointer"
          onClick={() => {
            sliderRef.current.slickGoTo(i); // Programmatically navigate to the clicked slide
            setCurrentSlide(i); // Update currentSlide to reflect the navigation
          }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className={`h-[70px] md:h-[80px] lg:h-[100px] w-[200px] ${
              currentSlide === i
                ? "border-2  border-sky-500"
                : "border border-gray-300"
            }`}
          />
        </div>
      ))}
    </div>
  );

  return (
 <>
 {Showphotos && 
   <div className="fixed inset-0 flex  items-center justify-center bg-black bg-opacity-50 z-50">   <div className="relative  bg-white p-5 w-[80%] max-w-[1100px]">

   <Slider {...settings} ref={sliderRef}>
     {Photos.map((image, key) => (
       <div key={key} className="flex w-screen overflow-hidden">
         <img
           src={image.src}
           alt={image.alt}
           className="w-full h-[250px] md:h-[500px]"
         />
       </div>
     ))}
   </Slider>
   {renderAdditionalDots()}
   <p onClick={()=>{setshowphotos(false)}} className=" cursor-pointer top-7 right-7 bg-white w-fit h-fit rounded-full text-xl p-1 absolute "><RxCross2/></p>
 </div></div>}</>
 
  );
}
