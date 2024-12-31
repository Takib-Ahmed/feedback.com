import { LuDownload } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
export default function Menu({Showmenu,setshowmenu}) {


  return (
    <>
    {Showmenu &&
   

    
    <center className=" fixed inset-0 flex  items-center justify-center bg-black bg-opacity-50 z-50">
  
        <div className=" w-[80%] p-3 flex justify-center flex-col bg-white rounded-2xl">
      
      <div className="relative flex">
      <img src="/Menu/9d9022d601bdb3d9d2f32ad44113c9ce 1.png" alt="" />    <p onClick={()=>{setshowmenu(false)}} className=" cursor-pointer  bg-white w-fit h-fit rounded-full text-2xl p-1 -translate-x-11 translate-y-3"><RxCross2/></p>
      </div>
          <div className=" flex flex-col gap-2 p-1 md:p-5 justify-center">
            <div className="text-xl md:text-2xl font-bold">Menu Bella Italia</div>
            <a  href='/Menu/9d9022d601bdb3d9d2f32ad44113c9ce 1.png'  download className=" relative flex  cursor-pointer text-[#1677BD] gap-2  justify-center">
         <div className=" flex gap-2 justify-center items-center inset-0  w-52  border-[#1677BD] border-2 rounded-full text-sm md:font-normal">
         <LuDownload className=" mt-1" />

<p>Dowload this menu</p>
         </div>
            </a>
        
          </div>
        </div>
      </center>}
   
    </>
  );
}
