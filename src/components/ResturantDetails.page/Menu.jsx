import { LuDownload } from "react-icons/lu";
export default function Menu({Showmenu}) {


  return (
    <>
    {Showmenu &&    <center className=" fixed z-50  top-32 left-40">
        <div className=" w-[80%] p-3 flex justify-center flex-col bg-white rounded-2xl">
          <img src="/Menu/9d9022d601bdb3d9d2f32ad44113c9ce 1.png" alt="" />
          <div className=" flex flex-col gap-2 p-5 justify-center">
            <div className="text-2xl font-bold">Menu Bella Italia</div>
            <div className="flex mx-80 cursor-pointer text-[#1677BD] gap-2  justify-center border-[#1677BD] border-2 rounded-full">
              <LuDownload className=" mt-1" />

              <p>Dowload this menu</p>
            </div>
          </div>
        </div>
      </center>}
   
    </>
  );
}
