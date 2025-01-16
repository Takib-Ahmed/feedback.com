/* eslint-disable react/prop-types */
import { IoFilterSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { BsSortUp, BsSortDown } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";
import { Button } from "../ui/button";
import { useState } from "react";
export default function Reviews({ ListReviews }) {
    const ratings = [5, 4, 3, 2, 1];
    const [Filterpopup,setfilterpopup] = useState(false)
    const [Sortpopup,setsortpop] = useState(false)
    const [Sort,setsort] = useState(null)




    const[Filterby,setfilterby] = useState(false)
    const sortedReviews = [...ListReviews].sort((a, b) =>
     Sort===null ? 0: Sort ? b.Rating - a.Rating : a.Rating - b.Rating
    );
  return (
    <div className="p-20 m-10 px-5">
      <div className="flex gap-2">
        <button className=" w-fit relative rounded-full flex border-2 p-2 px-3 gap-2 bg-transparent  border-[#918f8f]  text-[#918f8f] hover:border-slate-800 hover:text-white hover:bg-slate-800 z-10 "  onClick={()=>{setfilterpopup((prev)=>!prev) ;
        setsortpop(false)

        }}>
          {" "}
         {!Filterby?<IoFilterSharp className="  mt-1"  /> :<RxCross2 className="mt-0.5 z-50 text-xl p-0 m-0" onClick={(event)=>{
          setfilterby(false);
          event.stopPropagation()
         }}/>} Filter{" "}
          <div className={` transition-all origin-top duration-300   top-12 absolute left-0 grid gap-1  py-6 rounded-lg  shadow-xl text-[#5D5D5D] bg-white ${Filterpopup ? 'w-fit' : 'w-[180px]'} rounded-md duration-300 origin-top border ${Filterpopup ? 'scale-100' : 'scale-0'}`} >
            <div className=" text-left px-6">Filter By Rating</div>
  {ratings.map((rating) => (
    <div key={rating} className=" hover:bg-gray-600 flex gap-2 px-6" onClick={()=>{
      setfilterby(rating)
    }}>
<p className=" text-xl">{rating}</p>
      <div className="flex gap-2 mt-1.5">
        {Array(5)
          .fill()
          .map((_, i) => (
            <IoMdStar
              key={i}
              className="w-5 h-5 rounded-[2px] text-white pt-0.5"
              style={{
                background:
                  rating - 1 >= i
                    ? "#E8A641" // Fully filled
                    : rating - i > 0
                    ? `linear-gradient(to right, #E8A641 ${Math.round(
                        (rating - i) * 100
                      )}%, #9F9F9F ${Math.round(100 - (rating - i) * 100)}%)`
                    : "#9F9F9F", // Empty
              }}
            />
          ))}
      </div>
    </div>
  ))}
</div>
        </button>
        <button className=" w-fit relative rounded-full flex border-2 p-2 px-3 gap-2 bg-transparent  border-[#918f8f]  text-[#918f8f] hover:border-slate-800 hover:text-white hover:bg-slate-800" onClick={()=>{
     
     setsortpop((prev)=>!prev) 
     setfilterpopup(false)
        }}>
      
          {Sort ? <BsSortUp className="  mt-1" />:<BsSortDown className="  mt-1" />} Sort    {" "}
          <div className={` transition-all origin-top duration-300   top-12 absolute left-0 grid gap-1   rounded-lg  shadow-xl text-[#5D5D5D] bg-white ${Sortpopup ? 'w-fit' : 'w-[180px]'} rounded-md duration-300 origin-top border ${Sortpopup ? 'scale-100' : 'scale-0'}`} >

<div className=" grid gap-1   pb-0">
<p className=" text-nowrap text-left hover:bg-gray-600 px-3 py-2 pe-10  hover:text-white" onClick={()=>{setsort(null)}}>Defualt</p>
<p className=" text-nowrap text-left hover:bg-gray-600 px-3 py-2 pe-10  hover:text-white" onClick={()=>{setsort(true)}}>Highest Rated</p>
<p className=" text-nowrap text-left hover:bg-gray-600 px-3 py-2 pe-10  hover:text-white" onClick={()=>{setsort(false)}}>Lowest Rated</p>

</div>
          </div>
        </button>
      </div>
      <div className="flex flex-col justify-center gap-4 py-20">
        {sortedReviews.filter((reviews)=>Filterby? reviews.Rating === Filterby:true).map((value, key) => (
          <div className="" key={key}>
            <div className=" bg-[#F8F8F8]  p-10  rounded-2xl">
              <div className="Reviewcard flex flex-wrap gap-2">
                <div className="profile bg-white w-14 h-14 items-center  justify-center flex  rounded-full">
                  <img src="/Detailspage/Vector (10).png" alt="" />
                </div>
                <div className="grid gap-8">
                  <div className="grid gap-4">
                    <div>
                      <h1 className="name text-xl font-bold">Wei Jie</h1>
                      <p className="location">Singapore, Little india</p>
                    </div>
                    <div className="flex flex-wrap  items-start ps-0 gap-5  ">
                      {/* Rating Stars */}
                      <div className="flex gap-1 ">
                        {Array(5)
                          .fill()
                          .map((_, i) => (
                            <IoMdStar
                              key={i}
                              className=" w-5 h-5 rounded-[2px]  text-white pt-0.5"
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
                  </div>

                  <div className="description md:w-[30rem]">
                    The lorem ipsum is, in printing, a series of meaningless
                    words used temporarily to calibrate a layout.The lorem ipsum
                    is, in printing, a series of meaningless words used
                    temporarily to calibrate a layout.
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <center className=" text-2xl font-bold p-5">
        <Button className="bg-[#1677BD] hover:opacity-60 hover:bg-[#1677BD] mt-2 rounded-full px-10 ">
          Show More Reviews
        </Button>
      </center>
    </div>
  );
}
