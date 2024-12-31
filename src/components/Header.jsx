/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { TbWorld } from "react-icons/tb";
import { LuUtensilsCrossed } from "react-icons/lu";
import { Link } from "react-router-dom";
export default function Header({
  Searchvalue,
  setsearchvalue,
  Resturantslist,
  setfiltervalue,
}) {
  const [autocompletes, setautocompletes] = useState(Searchvalue);
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const suggestionRefs = useRef();
  

  const [autocompletearraylength,setautocompletearray] = useState()


useEffect(() => {
  console.log("Effect Triggered");
  console.log("Searchvalue:", Searchvalue);


  // Avoid running if Resturantslist is undefined or empty
  if (!Resturantslist || Resturantslist.length === 0) {
    setautocompletearray(0);
    return;
  }

if(Searchvalue==='') {
setActiveIndex(0) 
setActiveIndex(-1)}
  const count = Resturantslist.filter((restaurant) =>
    Searchvalue
      ? restaurant.Name?.toLowerCase().includes(Searchvalue.toLowerCase())
      : false
  ).length;

  console.log("Filtered count:", count);
  setautocompletearray(count);

  const handleResize = () => setWidth(window.innerWidth);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, [Searchvalue, Resturantslist]);

  return (
    <>
      <nav className="flex justify-between items-center px-1 sm:px-6 py-3 shadow-sm bg-white  sticky top-0 w-full z-50" id="top">
        {/* Logo */}
     <Link to={'/'}>   <div className="flex items-center">
          <div className=" text-white md:px-2 py-1 rounded-md font-bold text-sm">
            <img
              src="/Header/Logo.png"
              alt=""
              className=" lg:w-40 sm:w-32 w-28"
            />
          </div>
        </div></Link>

        {/* Search Bar */}
        <div
          className={
            ` z-50  flex  min-w-10 items-center   py-0.5 px-2 pe-0.5 md:px-4 md:pe-1 sm:py-1  sm:w-full max-w-fit  md:w-full lg:max-w-lg lg:w-full relative ` +
            `${
              Searchvalue != "" && autocompletes != ""
                ? " searchinput bg-white "
                : "bg-gray-100 rounded-full shadow-inner"
            }`
          }
        >
          <input
            value={Searchvalue && Searchvalue}
            type="text"
            placeholder={
              width < 768 ? "restaurant...." : "restaurant, hotel, service...."
            }
            className=" searchinputs flex-grow outline-none bg-transparent text-sm placeholder-gray-400 w-24 sm:w-32  md:w-auto "
            onKeyDown={(e)=>{

if(e.key==='ArrowDown'){
setActiveIndex((previndex)=>autocompletearraylength-1>previndex && previndex+1)
console.log(activeIndex)
if(activeIndex=== autocompletearraylength-1){
  setActiveIndex(-1)
}
if (e.key === 'Enter'){
  document.getElementById('active').click()
}




}
if(e.key==='ArrowUp'){
  setActiveIndex((previndex)=>0<=previndex ? previndex-1: autocompletearraylength-1)
  console.log(activeIndex)
  if(activeIndex=== 0){
    setActiveIndex(-1)
  }
  if (e.key === 'Enter'){
    document.getElementById('active').click()
  }
  
  
  
  
  }
  

if (e.key === 'Enter'){
  
  if(activeIndex==-1){
    setfiltervalue(e.target.value)
    setautocompletes('');
  }
  else{
    document.getElementById('active').click()
  }
}

            }} onChange={(e) => {
              setsearchvalue(e.target.value);
              setActiveIndex(-1)
              setautocompletes(e.target.value);
       
            }}
          />
          <div
            className={
              `top-[90%]  bg-white   pt-5 w-full gap-5 left-0  h-fit flex flex-col absolute cursor-pointer autocomplete` +
              `${autocompletes != "" ? ` block ` : ` hidden`}`
            }
          >
            {Searchvalue != "" &&
              Resturantslist.filter((Resturants) =>
                Resturants.Name.toLowerCase().includes(
                  Searchvalue && Searchvalue.toLowerCase()
                )
              ).map((value,key) => (
              <Link to={'search'} key={key}><span id={activeIndex===key && 'active'}
              key={key}
              onClick={() => {
                setsearchvalue(value.Name);
                setautocompletes("");
                setfiltervalue(value.Name);
       setActiveIndex(-1)
              }}
              className={`   border-[#969696] border-b-2 p-4 mx-5 flex gap-5 hover:border-black ` + `${activeIndex===key && 'bg-gray-500 rounded-lg text-white hover'}`}
          >
              <LuUtensilsCrossed className={` icon text-4xl border p-1 ` + `${activeIndex===key ? 'rounded-full':'text-[#969696] border-[#969696]   rounded-full '}`} />
              <p className=" pt-1.5">{value.Name}</p>
            </span></Link>  
              ))}
            <img
              src="/public/Header/Rectangle 49.png"
              alt=""
              className=" fixed right-0 left-0  w-screen  -z-20"
            />
          </div>
          <span className="h-6 border-l border-gray-300  md:ps-2"></span>

          <select
            name=""
            id=""
            className=" md:px-10  me-0.5 sm:me-2  searchinputs outline-none bg-transparent text-sm text-gray-400 ps-2 w-24 sm:w-32 md:w-auto"
          >
            <option value="Singapure">Singapure</option>
          </select>
          {/* Search Icon */}
          {Searchvalue ? (
            <button
              className=" text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center  sm:p-0  "
              onClick={() => {
                setsearchvalue("");
                setautocompletes("");
              }}
            >
              <img src="/Header/Group 3761.png" alt="" />
            </button>
          ) : (
            <button
              className=" text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center  sm:p-0  "
              onClick={() => {
                setfiltervalue(Searchvalue);
              }}
            >
              <img src="/Header/Search.png" alt="" />
            </button>
          )}
        </div>

        {/* Business Button */}
        <div className="flex md:gap-2 lg:gap-5 items-center w-fit  ">
          <TbWorld className=" navbuttons text-[#595959] p-0 m-0  hidden md:block   text-3xl hover:text-black    bg-transparent  rounded-full  border-none outline-none cursor-pointer " />

          <Button className=" navbuttons hover:invert items-center  text-white lg:px-4 py-2 text-sm rounded-full hidden md:flex">
            My Feedback for business{" "}
          </Button>

          <button
            className=" hidden text-gray-700 hover:text-blue-600 navmenu  "
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <nav className="md:hidden bg-white shadow-md absolute top-16 right-1">
              <a
                href="/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                Home
              </a>
              <a
                href="/about"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                About
              </a>
              <a
                href="/services"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                Services
              </a>
              <a
                href="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                Contact
              </a>
            </nav>
          )}
        </div>
      </nav>
    </>
  );
}
