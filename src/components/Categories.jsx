import { useState } from "react";

import { RxGrid } from "react-icons/rx";
import { LuUtensilsCrossed } from "react-icons/lu";
import { RiHotelLine } from "react-icons/ri";
import { HiOutlineHome } from "react-icons/hi";
import { PiCoatHanger, PiBarbell } from "react-icons/pi";
import { IoCarOutline } from "react-icons/io5";
import { TbWashGentle } from "react-icons/tb";
import { LiaTheaterMasksSolid } from "react-icons/lia";
import { CiBeerMugFull } from "react-icons/ci";
import { BeautySpa, Park } from "./svgs";

export default function CategorySection(){
    const categories = [
        { name: "All", icon: RxGrid  },
        { name: "Restaurants", icon: LuUtensilsCrossed },
        { name: "Hotels", icon: RiHotelLine},
        { name: "Home services", icon: HiOutlineHome },
        { name: "Shopping", icon: PiCoatHanger },
        { name: "Car location", icon: IoCarOutline},
        { name: "Beauty & Spa", icon: BeautySpa },
        { name: "Park", icon: Park},
        { name: "Museum", icon:LiaTheaterMasksSolid},
        { name: "Car wash", icon: TbWashGentle},
        { name: "Bars", icon: CiBeerMugFull},
        { name: "Gyms", icon: PiBarbell},
      ];
      
    const [activeCategory, setActiveCategory] = useState("Restaurants");
  const [Hovered,setIshovered] = useState('')
    return (
        <div className=" Catergories flex items-center justify-center bg-white  py-10  h-[4rem]">
        <div className="mt-[0.5%] flex space-x-6 overflow-x-auto  justify-between w-full px-2 lg:px-12  lg:gap-0 gap-4">
          {categories.map((category) => (
            <button 
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`flex flex-col items-center gap-1 justify-center  hover:text-blue-600 ${
                activeCategory === category.name ? " text-[#0078D4]" : "text-gray-500"
              }`}
            >
            
              <span className="text-2xl">{category.icon=== BeautySpa || category.icon=== Park ? <category.icon  Hovered={activeCategory === category.name  && true} />: <category.icon className={` ${activeCategory === category.name  ? 'text-[#1677BD]':'text-[#AFAFAF]'}` } />}</span>
         
              <span className="text-sm text-nowrap ">{category.name}</span>
          
              {activeCategory === category.name && (
                <div className="w-full h-[1.5px] bg-blue-600 mt-1"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    );
}