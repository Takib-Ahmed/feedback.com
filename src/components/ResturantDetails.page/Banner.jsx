/* eslint-disable react/prop-types */
import { IoMdStar } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
export default function Banner({listdetails}){


    return (
        <>

        <div className=" ">
            <div className="path p-5 font-bold px-20  ">Home / BellaItalia</div>
<div className="    text-white DetailsBanner"  onClick={()=>{
    console.log(listdetails.coverimage)
}}   style={{
    background: `url('${listdetails.Name === 'Bottega' ?'/Detailspage/Rectangle 28.png':listdetails.coverimage}') `,

  }}>
   <div className=" dbchild grid gap-10 p-10 sm:p-20"> <h1 className=" text-5xl font-bold">{listdetails.Name}</h1>
  
  <div className="flex items-center gap-5 ">
     {/* Rating Stars */}
     <div className="flex gap-1  pt-0.5">
     {Array(5)
     .fill()
     .map((_, i) => (
    
       <IoMdStar key={i} className=" w-5 h-5 rounded-[2px]  text-white"  style={{
        background:
          listdetails.Rating - 1>= i
            ? '#E8A641' // Fully filled
            : listdetails.Rating - i > 0
            ? `linear-gradient(to right, #E8A641 ${Math.round((listdetails.Rating - i) * 100)}%, #9F9F9F ${Math.round(100-(listdetails.Rating - i) * 100)}%)`
            : '#9F9F9F', // Empty
      }}/>
     ))}
        </div>
     <span className="text-sm font-bold">
    {listdetails.Rating} <span className=" ">{listdetails.Reviews}</span>
     </span>
   </div>
   <div className="description relative sm:w-96">
   <p className="  ">  {listdetails.description}</p>
   </div>
   <div className="location flex gap-2"><MdLocationOn               className="  mt-0.5 text-2xl" />{listdetails.location}</div>
   <div className="Worktime flex gap-2"><MdOutlineAccessTimeFilled  className="  mt-[0.20rem] text-xl" />{listdetails.worktime}</div></div>

</div>
   <center className="  flex justify-center items-center  -translate-y-1/2">
  <img src="/Detailspage/Ellipse 26.png" alt="  "   className=" w-20 sm:w-auto "/>
</center>
        </div>
        
        </>
    );
}