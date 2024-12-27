import { FaUtensils } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";
import { RiWhatsappFill } from "react-icons/ri";
import { TbWorldUpload } from "react-icons/tb";
export default function Moredetails({setshowmenu}) {
  return (
    <>
      <div className="  flex flex-wrap  md:p-32 m-12 justify-between    border-b-[#DCDCDC] border-b-2  moredetails">
        <div className="grid gap-10">
          <div className=" text-xltitle text-3xl font-bold">
            More Information
          </div>
          <div className=" text-xl flex gap-2" onClick={()=>{setshowmenu(true)}}>
            <FaUtensils className=" text-2xl mt-1" />
            <div className=" cursor-pointer border-transparent border-b-2 hover:border-black ">
              See the menu
            </div>
          </div>
          <div className=" text-xl flex gap-2">
            <BiSolidPhoneCall className=" text-2xl mt-1" />
            <p>+847 87 37 29 01</p>
          </div>
          <div className=" text-xl flex gap-2">
            <MdLocationOn className=" text-2xl mt-1" />
            <p>Singapour, Bishan</p>
          </div>
          <div className=" text-xl flex gap-2">
            <MdOutlineAccessTimeFilled className=" text-2xl mt-1" />
            <p>7j/7, 08:00 - 22:00</p>
          </div>
          <div className=" text-xl flex gap-2">
            <TbWorldUpload className=" text-2xl mt-1" />
            <a href="bellaitalia.com" className="border-b-2 border-black">
              www.bellaitalia.com
            </a>
          </div>
          <div className="flex socials gap-6 px-1 text-3xl">
            <IoLogoFacebook      className="" />
            <AiFillInstagram className="" />
            <BiLogoTiktok    className="" />
            <RiWhatsappFill  className=""/>
          </div>
        </div>
        <div className="map">
          <img src="/Detailspage/map.png" alt="" />
        </div>
      </div>
    </>
  );
}
