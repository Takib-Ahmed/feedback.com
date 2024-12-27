
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
export default function Photos(){
    return (
       <>
       <div className=" p-20 m-10 px-5">
    <div className=" lg:px-32 grid gap-4">
    <div className="title text-2xl font-bold">Discover our magnificent place in photos</div>
    <div className="subtitle text-sm md:w-[34rem]">The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing.</div>
    </div><br /><br />
         <div className="photos-slider flex flex-wrap gap-4 justify-center">
         <div className="relative">
         <img src="/Detailspage/Rectangle 1266.png" alt="" />
         <div className="flex absolute  bottom-5 cursor-pointer left-5 p-2 px-5 text-center bg-white rounded-full gap-2"><TfiLayoutGrid3Alt 
         className=" mt-1"/><p>View all photos (7)</p></div>
         </div>
            <div className="grid gap-3">
                <div className="flex flex-wrap justify-center lg:justify-normal gap-3"><img src="/public/Detailspage/Rectangle 1267.png" alt="" /><img src="/public/Detailspage/Rectangle 1268.png" alt="" /></div>
                <div className="flex flex-wrap justify-center lg:justify-normal gap-3"><img src="/public/Detailspage/Rectangle 1269.png" alt="" /><img src="/public/Detailspage/Rectangle 1270.png" alt="" /></div>
                
            </div>
         </div>

       </div>
       
       
       </> 
    );
}