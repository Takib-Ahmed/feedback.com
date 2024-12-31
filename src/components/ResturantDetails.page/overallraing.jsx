/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { IoMdStar } from "react-icons/io";

export default function Overallratings({ListReviews}) {
  return (
    <>
      <div className="Overallratings flex flex-wrap justify-center lg:justify-normal  m-20 gap-16 py-20 sm:p-20 border-b-[#DCDCDC] border-b-2">
      
          <div className="flex flex-wrap gap-5">
            <div className="mt-1">
              <img src="/Detailspage/Group 132.png" alt="" />
            </div>
            <div className=" grid gap-5">
              <div className=" grid">
                <h1 className=" text-2xl font-bold">Overall rating</h1>
                <p className=" text-sm text-gray-400">834 Reviews</p>
              </div>
              <div className="star flex gap-1">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <IoMdStar
                      key={i}
                      className=" w-5 h-5 rounded-[2px] bg-[#E8A641] text-white"
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className="grid gap-2">
        <div className="flex gap-2"> <div className=" text-x1 flex gap-2"><p>1</p><p>stars</p></div><div className=" w-64 sm:w-72 md:w-96 lg:w-[35rem] h-3 mt-1.5  bg-[#D9D9D9] rounded-full"><div className=" w-[100%] h-3 bg-[#1677BD]   rounded-full"></div></div></div>
        <div className="flex gap-2"> <div className=" text-x1 flex gap-2"><p>2</p><p>stars</p></div><div className=" w-64 sm:w-72 md:w-96 lg:w-[35rem] h-3 mt-1.5  bg-[#D9D9D9] rounded-full"><div className=" w-[80%] h-3  bg-[#268AD1]  rounded-full"></div></div></div>
        <div className="flex gap-2"> <div className=" text-x1 flex gap-2"><p>3</p><p>stars</p></div><div className=" w-64 sm:w-72 md:w-96 lg:w-[35rem] h-3 mt-1.5  bg-[#D9D9D9] rounded-full"><div className=" w-[50%] h-3  bg-[#2E95DF]  rounded-full"></div></div></div>
        <div className="flex gap-2"> <div className=" text-x1 flex gap-2"><p>4</p><p>stars</p></div><div className=" w-64 sm:w-72 md:w-96 lg:w-[35rem] h-3 mt-1.5  bg-[#D9D9D9] rounded-full"><div className=" w-[30%] h-3  bg-[#37A0EB]  rounded-full"></div></div></div>
        <div className="flex gap-2"> <div className=" text-x1 flex gap-2"><p>5</p><p>stars</p></div><div className=" w-64 sm:w-72 md:w-96 lg:w-[35rem] h-3 mt-1.5  bg-[#D9D9D9] rounded-full"><div className=" w-[10%] h-3  bg-[#3DA6F2]  rounded-full"></div></div></div>
          </div>
        </div>
   
    </>
  );
}
